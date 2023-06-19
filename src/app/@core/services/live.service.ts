import { Injectable } from "@angular/core";
import {Background, LiveData, defaultBackground, SongPlaying} from "../data/live";
import { Observable, interval, of as observableOf } from "rxjs";
import {ApiUrls} from "@core/data/api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LiveService extends LiveData {

  private hueRange = { min: 230, max: 360 };
  private hue = this.hueRange.min;
  private hueDirection = 1;

  private background: Background = defaultBackground;

  constructor(public http: HttpClient) {
    super();
  }

  subscribeBackground(): any {

    const transitionDuration = 10000;
    const period = 100;
    const alphaTransitionStep = transitionDuration / period;
    let transitionStep = 10;

    return interval(period).subscribe(() => {
      transitionStep++;

      let alpha = 100;
      if (transitionStep <= alphaTransitionStep) {
        alpha = 100 - (1 - transitionStep / alphaTransitionStep) * 100;
      }

      this.hue += this.hueDirection;
      if (this.hue > this.hueRange.max || this.hue < this.hueRange.min) {
        this.hueDirection *= -1;
      }

      this.background.color = `hsl(${this.hue}, 100%, 50%, ${alpha}%)`;
      this.backgroundSubject.next(this.background);
    });
  }

  getBackground(): Observable<Background> {
    return observableOf(this.background);
  }

  getSongPlaying(): Observable<SongPlaying> {
    return observableOf();
  }

}
