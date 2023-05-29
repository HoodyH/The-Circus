import {Component, OnInit} from '@angular/core';
import {Event, EventsData} from "@core/data/events";
import {Gallery, GalleryData} from "@core/data/galley";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  event: Event;
  gallery: Gallery[];

  constructor(private eventService: EventsData, private galleryService: GalleryData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe({
      next: (event) => {
        this.event = event
      }
    })

    this.galleryService.getGallery().subscribe({
      next: (galley) => {
        this.gallery = galley;
      }
    })
  }

}
