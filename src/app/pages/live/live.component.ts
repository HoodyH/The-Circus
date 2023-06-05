import { Component, OnDestroy, OnInit } from '@angular/core';
import { Background, LiveData } from '@app/@core/data/live';
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
export class LiveComponent implements OnInit, OnDestroy {

  event: Event;
  gallery: Gallery;
  files: FileStore[];
  
  polls: Poll[];
  currentPoll: Poll | null;
  currentPollResults: PollCountResult[] = [];
  pollDataSubscripton: any;

  currentLiveService = new CurrentLiveService()
  currentLiveDisplay: string = this.currentLiveService.carusel

  background: Background;
  backgroundSubscription: any = null;


  constructor(private eventService: EventsData, private galleryService: GalleryData, 
    private pollService: PollData, private liveService: LiveData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe({
      next: (event) => {
        this.event = event
      }
    })

    this.getCaruselData();

    this.pollService.getPoll().subscribe({
      next: (polls) => {
        this.polls = polls;
      }
    })

    this.liveService.backgroundSubject.subscribe({
      next: (background) => {
        this.background = background;
      }
    })

    this.backgroundSubscription = this.liveService.subscribeBackground()
  }

  ngOnDestroy(): void {
    if (this.backgroundSubscription) {
      this.backgroundSubscription.unsubscrive();
    }
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

  getCaruselData(lastFile: FileStore | undefined = undefined) {
    this.galleryService.getFiles().subscribe({
      next: (PaginatedFiles) => {
        // get the new images
        const files = PaginatedFiles.results;
        if (files && lastFile) {
          const index = files.findIndex(file => file.id === lastFile.id);
          if (index > 0) {
            this.files = files.slice(0, index);
          }
          if (index == -1) {
            this.files = files;
          }
        } else {
          this.files = files;
        }
      }
    })
  }

}
