// vehicle.model.ts
export interface Review {
  author: string;
  stars: number;
  review: string;
  author_image: string;
  date: string | Date; // Add date property
}

export interface Vehicle {
  name: string;
  year: number;
  images: string[];
  specs: string[];
  wltpRange: number;
  pricePerDay: number;
  turo_Rating: number;
  link: string;
  reviews: Review[];
  currentSlide: number;
  currentReviewIndex: number;
}