import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { VehicleService } from '../src/app/vehicle.service';
import { Vehicle } from '../src/app/vehicle/vehicle.model';

interface Review {
  author: string;
  author_image: string;
  date: string;
  stars: number;
  review: string;
}

const parseDate = (dateStr: string): Date => {
  try {
    // Turo format: "28 May 2025" or ISO "2025-05-28"
    if (dateStr.includes('-')) {
      return new Date(dateStr);
    }
    const [day, month, year] = dateStr.replace(',', '').split(' ');
    return new Date(`${month} ${day} ${year}`);
  } catch {
    return new Date(0); // Epoch for invalid dates
  }
};

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
};

const fetchReviews = async (
  page: puppeteer.Page,
  url: string,
  latestDate: Date
): Promise<{ reviews: Review[]; rating: number | null }> => {
  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
    };
    await page.setExtraHTTPHeaders(headers);
    await page.setUserAgent(headers['User-Agent']);
    console.log(`Fetching ${url} with headers:`, headers);

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for CAPTCHA resolution
    console.log(`Please solve the CAPTCHA for ${url} in the browser window...`);
    let isCaptchaPage = true;
    let content = await page.content();
    let attempt = 0;
    const maxAttempts = 30; // 1 minute max wait

    while (isCaptchaPage && attempt < maxAttempts) {
      const $ = cheerio.load(content);
      const title = await page.title();
      console.log(`Attempt ${attempt + 1}: Page title: ${title}`);
      if (
        !title.includes('Just a moment') &&
        ($('div:contains(trips)').length > 0 || $('h2:contains("Ratings and reviews")').length > 0)
      ) {
        isCaptchaPage = false;
        console.log(`CAPTCHA solved, scraping ${url}`);
      } else {
        await page.waitForTimeout(2000);
        content = await page.content();
        attempt++;
      }
    }

    if (isCaptchaPage) {
      console.warn(`CAPTCHA not solved after ${maxAttempts} attempts for ${url}`);
      return { reviews: [], rating: null };
    }

    // Scroll to load reviews
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(5000);
    }

    // Wait for review section
    try {
      await page.waitForSelector('h2:contains("Ratings and reviews")', { timeout: 30000 });
    } catch {
      console.warn(`Review section not found on ${url}`);
    }

    content = await page.content();
    fs.writeFileSync(`output_${url.split('/').pop()}.txt`, content, 'utf-8');
    console.log(`Saved page content to output_${url.split('/').pop()}.txt`);

    const $ = cheerio.load(content);
    const reviews: Review[] = [];
    const seenReviews = new Set<string>();

    // Debug: Log potential review divs
    console.log('Raw review elements:');
    const reviewSection = $('h2:contains("Ratings and reviews")').parent();
    reviewSection.find('div').each((i, el) => {
      const text = $(el).text().trim();
      if (text.match(/\d{1,2} \w+ \d{4}/)) {
        console.log(`[${i}] ${text.slice(0, 100)}...`);
      }
    });

    // Scrape reviews
    reviewSection.find('div[class*="review-item"], div[class*="review-card"], div[data-testid*="review"]').each((_, el) => {
      const text = $(el).text().trim();
      const dateMatch = text.match(/(\d{1,2} \w+ \d{4})/);
      if (!dateMatch) return;

      const reviewDate = parseDate(dateMatch[0]);
      if (isNaN(reviewDate.getTime()) || (latestDate && reviewDate <= latestDate)) return;

      const authorMatch = text.match(/^([^\•]+)/);
      let author = authorMatch ? authorMatch[0].trim() : 'Anonymous';
      if (author.startsWith('Reviews') || author === '' || author.match(/response/i)) return;

      let reviewText = text
        .replace(authorMatch ? authorMatch[0] : '', '')
        .replace(dateMatch[0], '')
        .replace(/•\s*/, '')
        .trim();
      const responseIndex = reviewText.search(/(?:\w+\'s response|response from \w+)/i);
      if (responseIndex !== -1) {
        reviewText = reviewText.slice(0, responseIndex).trim();
      }

      const reviewKey = `${author}|${dateMatch[0]}|${reviewText}`;
      if (seenReviews.has(reviewKey) || !reviewText || reviewText === 'See more' || reviewText.match(/response/i)) return;
      seenReviews.add(reviewKey);

      reviews.push({
        author,
        author_image: `assets/images/authors/${author.replace(/\s/g, '_')}.jpg` || 'assets/images/authors/placeholder.jpg',
        date: formatDate(reviewDate),
        stars: 5,
        review: reviewText,
      });
    });

    // Scrape rating
    let rating: number | null = null;
    const ratingText =
      $('div:contains(trips)').text().match(/(\d\.\d{1,2})/) ||
      $('span[class*="rating"]').text().match(/(\d\.\d{1,2})/) ||
      $('div').filter((_, el) => $(el).text().match(/^\d\.\d+\s*\(\d+\s*trips\)$/)).text().match(/(\d\.\d{1,2})/);
    if (ratingText) {
      rating = parseFloat(ratingText[0]);
    }

    console.log(`Fetched ${reviews.length} new reviews and rating ${rating} from ${url}`);
    return { reviews, rating };
  } catch (error) {
    console.error(`Error fetching reviews from ${url}:`, (error as Error).message);
    return { reviews: [], rating: null };
  }
};

const updateVehicleService = async () => {
  const filePath = path.resolve(__dirname, '../src/app/vehicle.service.ts');
  const vehicleService = new VehicleService();
  const vehicles: Vehicle[] = vehicleService.getVehicles();

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized', '--no-sandbox'],
    timeout: 60000,
  });

  try {
    for (const vehicle of vehicles) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      try {
        const latestDate = vehicle.reviews.length
          ? vehicle.reviews.reduce<Date>((max, r) => {
              const d = parseDate(r.date as string);
              return d > max ? d : max;
            }, new Date(0))
          : new Date(0);
        console.log(`Processing ${vehicle.link} with latest review date: ${latestDate}`);

        const { reviews: newReviews, rating } = await fetchReviews(page, vehicle.link, latestDate);
        console.log(`New reviews for ${vehicle.link}:`, newReviews);
        if (rating !== null) {
          console.log(`Updated rating for ${vehicle.link}: ${rating}`);
        }

        // Uncomment to append
        // vehicle.reviews.push(...newReviews);
        // if (rating !== null) vehicle.turo_Rating = rating;
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  // Uncomment to enable file writing
  /*
  const updatedVehiclesStr = JSON.stringify(vehicles, (key, value) => {
    if (key === 'review') {
      return value.replace(/'/g, "\\'");
    }
    return value;
  }, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'")
    .replace(/'(\d{4}-\d{2}-\d{2})'/g, '$1')
    .replace(/'(\d+\.\d+)'/g, '$1')
    .replace(/'true'/g, 'true')
    .replace(/'false'/g, 'false');

  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading vehicle.service.ts:', error);
    return;
  }

  const updatedContent = content.replace(
    /vehicles: Vehicle\[\] = \[[\s\S]*?\];(?=\s*getVehicles)/,
    `vehicles: Vehicle[] = ${updatedVehiclesStr};`
  );

  try {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated ${filePath} with new reviews.`);
  } catch (error) {
    console.error('Error writing to vehicle.service.ts:', error);
  }
  */
};

updateVehicleService().catch(console.error);