import {Component, OnInit} from '@angular/core';
import {Event, EventsData} from "@core/data/events";
import {Gallery, GalleryData} from "@core/data/galley";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: Event;
  gallery: Gallery[] = []

  constructor(private eventService: EventsData, private galleryService: GalleryData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((event) => {
      this.event = event
    })

    this.galleryService.getGallery().subscribe((gallery) => {
      this.gallery = gallery
    })
  }

}
