export interface Vehicle {
  name: string;
  images: string[];
  link: string;
  currentSlide: number;
  year: number;
  pricePerDay: number;
  specs: string[];
  wltpRange: number; // Add WLTP range
}
