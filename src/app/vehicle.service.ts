import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [
    {
      name: 'Tesla Model Y',
      images: [
        'assets/images/tesla-model-y/1.jpg',
        'assets/images/tesla-model-y/2.jpg',
        'assets/images/tesla-model-y/3.jpg',
        'assets/images/tesla-model-y/4.jpg',
        'assets/images/tesla-model-y/5.jpg',
        'assets/images/tesla-model-y/6.jpg',
        'assets/images/tesla-model-y/7.jpg',
        'assets/images/tesla-model-y/8.jpg',
        'assets/images/tesla-model-y/9.jpg'
      ],
      link: 'https://turo.com/au/en/suv-rental/australia/hurstville/tesla/model-y/2121538',
      currentSlide: 0,
      year: 2023,
      pricePerDay: 110,
      specs: ['RWD', 'Autopilot', 'Premium Interior'],
      wltpRange: 465 // Add WLTP range
    },
    {
      name: 'Tesla Model 3 Highland LR',
      images: [
        'assets/images/tesla-model-3/1.jpg',
        'assets/images/tesla-model-3/2.jpg',
        'assets/images/tesla-model-3/3.jpg',
        'assets/images/tesla-model-3/4.jpg',
        'assets/images/tesla-model-3/5.jpg',
        'assets/images/tesla-model-3/6.jpg',
        'assets/images/tesla-model-3/7.jpg',
        'assets/images/tesla-model-3/8.jpg',
        'assets/images/tesla-model-3/9.jpg',
        'assets/images/tesla-model-3/10.jpg'
      ],
      link: 'https://turo.com/au/en/car-rental/australia/hurstville/tesla/model-3/2518309',
      currentSlide: 0,
      year: 2023,
      pricePerDay: 100,
      specs: ['Long Range', 'Dual Motor', 'Autopilot', 'Premium Interior'],
      wltpRange: 628 // Add WLTP range
    },
    {
      name: 'Tesla Model 3 Performance',
      images: [
        'assets/images/tesla-model-3-perf/1.jpg',
        'assets/images/tesla-model-3-perf/2.jpg',
        'assets/images/tesla-model-3-perf/3.jpg',
        'assets/images/tesla-model-3-perf/4.jpg',
        'assets/images/tesla-model-3-perf/5.jpg',
        'assets/images/tesla-model-3-perf/6.jpg',
        'assets/images/tesla-model-3-perf/7.jpg',
        'assets/images/tesla-model-3-perf/8.jpg',
        'assets/images/tesla-model-3-perf/9.jpg'
      ],
      link: 'https://turo.com/au/en/car-rental/australia/hurstville/tesla/model-3/2741050',
      currentSlide: 0,
      year: 2024,
      pricePerDay: 250,
      specs: ['Performance Suspension', 'Autopilot', '0-100 in 3 sec', 'Premium Interior'],
      wltpRange: 528 // Add WLTP range
    }
  ];

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }
}
