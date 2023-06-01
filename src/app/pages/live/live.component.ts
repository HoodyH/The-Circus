import { Component, OnInit } from '@angular/core';
import { Poll, PollCountResult, PollData } from '@app/@core/data/poll';
import { Event, EventsData } from "@core/data/events";
import { FileStore, Gallery, GalleryData } from "@core/data/galley";


export class CurrentLiveService {
  public readonly empty = "empty";
  public readonly poll = "poll";
  public readonly carusel = "carusel";
}


@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  event: Event;
  gallery: Gallery;
  files: FileStore[];
  
  polls: Poll[];
  currentPoll: Poll | null;
  currentPollResults: PollCountResult[] = [];
  pollDataSubscripton: any;

  currentLiveService = new CurrentLiveService()
  currentLiveDisplay: string = this.currentLiveService.carusel


  constructor(private eventService: EventsData, private galleryService: GalleryData, private pollService: PollData) {
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
        if (galley.files.length > 0){
          this.files = galley.files.slice(0, 1);
        } else {
          this.files = []
        }
      }
    })

    this.pollService.getPoll().subscribe({
      next: (polls) => {
        this.polls = polls;
      }
    })
  }

  checkAction() {

  }

  getPollData() {
    this.pollService.getPoll().subscribe({
      next: (polls) => {
        for (const poll of polls) {
          if (this.pollService.isActive(poll.start_datetime, poll.end_datetime)) {
            // if the poll has changed from the current one
            this.currentPoll = poll;
          }
        }
        if (this.currentPoll) {
          this.currentPollResults = this.pollService.generateResults(this.currentPoll.votes);
        }
      }
    });
  }

  getCaruselData(lastFile: FileStore) {
    this.galleryService.getFiles().subscribe({
      next: (PaginatedFiles) => {
        // get the new images
        const files = PaginatedFiles.results;
        if (files && lastFile) {
          const index = files.findIndex(file => file.id === lastFile.id);
          if (index > 0) {
            this.files = files.slice(0, index);
            return;
          }
        }
        this.files = files;
      }
    })
  }

}
