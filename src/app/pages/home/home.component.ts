import { Component, OnInit } from '@angular/core';
import {Activity, Event, EventsData} from "@core/data/events";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventDate = new Date('2023-06-10T23:59:59');
  activities: Activity[] = []

  constructor(private eventService: EventsData) {

    this.eventService.getEvent().subscribe((event) => {
      this.eventDate = event.timestamp
    })

    this.eventService.getActivities().subscribe((activities) => {
      this.activities = activities
    })
  }

  ngOnInit(): void {
  }

}
