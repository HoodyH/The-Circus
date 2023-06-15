import {Component, OnDestroy, OnInit} from '@angular/core';
import {Background, defaultBackground, LiveData} from '@app/@core/data/live';
import {PollData, PollLiveData} from '@app/@core/data/poll';
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
  selector: 'display-a-live',
  templateUrl: './display-a.component.html',
  styleUrls: ['./display-a.component.css']
})
export class DisplayAComponent implements OnInit, OnDestroy {

  event: Event;
  gallery: Gallery;
  files: FileStore[];

  currentActivity: Activity | undefined;

  pollLiveData: PollLiveData;
  currentPollSubscription: any;

  liveScreenTypes = LiveScreenTypes
  liveScreenConfiguration: LiveConfiguration = defaultLiveScreenConfiguration;
  background: Background = defaultBackground;
  backgroundSubscription: any = null;


  constructor(private eventService: EventsData, private galleryService: GalleryData,
              private pollService: PollData, private liveService: LiveData) {
  }

  ngOnInit(): void {

    this.eventService.getEvent(this.eventService.eventId).subscribe({
      next: (event) => {
        this.event = event
      }
    })

    this.getCarouselData();

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

    // activate or deactivate poll
    if (this.liveScreenConfiguration.main_block == this.liveScreenTypes.POLL) {
      this.getPollData();
      this.currentPollSubscription = setInterval(() => {
        this.getPollData();
      }, 5000);
    } else {
      if (this.currentPollSubscription) {
        this.currentPollSubscription.unsubscrive();
      }
      this.pollLiveData.currentPoll = null;
      this.pollLiveData.currentPollResults = [];
    }
  }

  getPollData() {
    this.pollService.getPoll().subscribe({
      next: (polls) => {
        this.pollLiveData = this.pollService.getPollData(polls);
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

