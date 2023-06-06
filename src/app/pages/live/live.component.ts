import {Component, OnDestroy, OnInit} from '@angular/core';
import {Background, defaultBackground, LiveData} from '@app/@core/data/live';
import {Poll, PollCountResult, PollData} from '@app/@core/data/poll';
import {
  Activity,
  defaultLiveScreenConfiguration,
  Event,
  EventsData,
  LiveConfiguration,
  LiveScreenTypes
} from "@core/data/events";
import {FileStore, Gallery, GalleryData} from "@core/data/galley";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  event: Event;
  gallery: Gallery;
  files: FileStore[];

  currentActivity: Activity | undefined;

  polls: Poll[];
  currentPoll: Poll | null;
  currentPollResults: PollCountResult[] = [];
  pollDataSubscription: any;

  liveScreenTypes = LiveScreenTypes
  liveScreenConfiguration: LiveConfiguration = defaultLiveScreenConfiguration;
  background: Background = defaultBackground;
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

    this.getCarouselData();

    this.pollService.getPoll().subscribe({
      next: (polls) => {
        this.polls = polls;
      }
    })

    // connect background subject
    this.liveService.backgroundSubject.subscribe({
      next: (background) => {
        this.background = background;
      }
    })
  }

  ngOnDestroy(): void {
    if (this.backgroundSubscription) {
      this.backgroundSubscription.unsubscrive();
    }
  }

  currentActivityChange(event: Activity) {
    this.currentActivity = event;
    this.liveScreenConfiguration = this.currentActivity.live_configuration;

    // activate or deactivate lights
    if (this.liveScreenConfiguration.lights) {
      this.backgroundSubscription = this.liveService.subscribeBackground();
    } else {
      if (this.backgroundSubscription) {
        this.backgroundSubscription.unsubscrive();
      }
      this.background = defaultBackground;
    }
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

  getCarouselData(lastFile: FileStore | undefined = undefined) {
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
