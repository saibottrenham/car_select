import { Component, OnInit } from '@angular/core';
import { TuroService } from '../turo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private turoService: TuroService) {}

  ngOnInit() {
    this.turoService.getUpcomingTrips().subscribe({
      next: (data) => {
        console.log('Upcoming Trips:', data);
        // You can also process the data as needed
      },
      error: (error) => {
        console.error('Error fetching upcoming trips:', error);
        // Handle the error appropriately
      },
      complete: () => console.log('Trip data fetch complete')
    });
  }

}
