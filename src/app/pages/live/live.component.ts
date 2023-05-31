import {Component, OnInit} from '@angular/core';
import { Poll, PollData } from '@app/@core/data/poll';
import {Event, EventsData} from "@core/data/events";
import {StaticGallery, GalleryData} from "@core/data/galley";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  event: Event;
  gallery: StaticGallery[];
  polls: Poll[];

  constructor(private eventService: EventsData, private galleryService: GalleryData, private pollService: PollData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe({
      next: (event) => {
        this.event = event
      }
    })

    this.galleryService.getStaticGallery().subscribe({
      next: (galley) => {
        this.gallery = galley;
      }
    })

    this.pollService.getPoll().subscribe({
      next: (polls) => {
        this.polls = polls;
      }
    })
  }

}
