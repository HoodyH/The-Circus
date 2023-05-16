import {Component, OnInit} from '@angular/core';
import {Activity, Staff, EventsData} from "@core/data/events";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventDate = new Date('2023-06-10T23:59:59');
  activities: Activity[] = []
  staff: Staff[] = []

  constructor(private eventService: EventsData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((event) => {
      this.eventDate = event.timestamp
    })

    this.eventService.getActivities().subscribe((activities) => {
      this.activities = activities
    })

    this.eventService.getStaff().subscribe((staff) => {
      this.staff = staff
    })
  }

}
