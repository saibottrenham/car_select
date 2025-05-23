import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle, Review } from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
    this.vehicles.forEach(vehicle => {
      vehicle.currentSlide = 0;
      vehicle.currentReviewIndex = 0;
    });
  }

  bookVehicle(vehicle: Vehicle) {
    window.open(vehicle.link, '_blank');
  }

  prevSlide(vehicle: Vehicle) {
    vehicle.currentSlide = vehicle.currentSlide > 0 ? vehicle.currentSlide - 1 : vehicle.images.length - 1;
  }

  nextSlide(vehicle: Vehicle) {
    vehicle.currentSlide = vehicle.currentSlide < vehicle.images.length - 1 ? vehicle.currentSlide + 1 : 0;
  }

  prevReview(vehicle: Vehicle) {
    vehicle.currentReviewIndex = vehicle.currentReviewIndex > 0 ? vehicle.currentReviewIndex - 1 : vehicle.reviews.length - 1;
  }

  nextReview(vehicle: Vehicle) {
    vehicle.currentReviewIndex = vehicle.currentReviewIndex < vehicle.reviews.length - 1 ? vehicle.currentReviewIndex + 1 : 0;
  }

  getAverageRating(reviews: Review[]): number {
    if (!reviews?.length) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.stars, 0);
    return sum / reviews.length;
  }

  getStarArray(rating: number): number[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? 1 : 0);
    }
    return stars;
  }
}