import { Injectable } from "@angular/core";
import { Background, LiveData } from "../data/live";
import { Observable, Subject, interval, of as observableOf } from "rxjs";

@Injectable()
export class LiveService extends LiveData {

  private hueRange = { min: 230, max: 360 };
  private hue = this.hueRange.min;
  private hueDirection = 1;

  private background: Background = {
    color: '#eee'
  };
  public backgroundSubject: Subject<Background> = new Subject<Background>();

  subscribeBackground(): any {
    return interval(100).subscribe(() => {

      this.hue += this.hueDirection;
      if (this.hue > this.hueRange.max || this.hue < this.hueRange.min) {
        this.hueDirection *= -1;
      }
      const color = `hsl(${this.hue}, 100%, 50%)`;
      this.background.color = color;
      this.backgroundSubject.next(this.background);
    });
  }

  getBackground(): Observable<Background> {
    return observableOf(this.background);
  }

}