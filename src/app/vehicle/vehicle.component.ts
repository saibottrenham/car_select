import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
    // No need to initialize currentSlide here, as it's done in the service
  }

  bookVehicle(vehicle: Vehicle) {
    window.open(vehicle.link, '_blank'); // Open link in a new tab
  }

  prevSlide(vehicle: Vehicle) {
    vehicle.currentSlide = (vehicle.currentSlide > 0) ? vehicle.currentSlide - 1 : vehicle.images.length - 1;
  }

  nextSlide(vehicle: Vehicle) {
    vehicle.currentSlide = (vehicle.currentSlide < vehicle.images.length - 1) ? vehicle.currentSlide + 1 : 0;
  }
}
