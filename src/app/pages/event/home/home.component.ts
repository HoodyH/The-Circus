import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Event, EventsData} from "@core/data/events";
import {GalleryData, Gallery} from "@core/data/galley";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: Event;
  gallery: Gallery;

  constructor(private eventService: EventsData, private galleryService: GalleryData, private router: Router) {
  }

  ngOnInit(): void {
    this.eventService.getEvent(this.eventService.eventCode).subscribe((event) => {
      this.event = event
    })

    this.galleryService.getGallery(this.eventService.eventCode).subscribe((gallery) => {
      this.gallery = gallery
    })
  }

  navigateToGallery() {
    this.router.navigateByUrl(`/${this.eventService.eventCode}/gallery/photos`).then();
  }

}
