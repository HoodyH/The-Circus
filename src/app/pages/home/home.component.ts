import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Event, EventsData} from "@core/data/events";
import {StaticGallery, GalleryData} from "@core/data/galley";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: Event;
  staticGallery: StaticGallery[] = []

  constructor(private eventService: EventsData, private galleryService: GalleryData, private router: Router) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((event) => {
      this.event = event
    })

    this.galleryService.getStaticGallery().subscribe((staticGallery) => {
      this.staticGallery = staticGallery
    })
  }

  navigateToGallery() {
    this.router.navigateByUrl('/gallery/photos').then()
  }

}
