import {Observable, Subject} from "rxjs";

export interface Background {
  color: string;
}

export interface SongPlaying {
  title: string;
  imageUrl: string;
  artist: string;
  currentTime: string;
  remainingTime: string;
}

export const defaultBackground: Background = {
  color: '#eee'
}

export abstract class LiveData {

  public backgroundSubject: Subject<Background> = new Subject<Background>();

  abstract subscribeBackground(): any;
  abstract getBackground(): Observable<Background>;
  abstract getSongPlaying() : Observable<SongPlaying>
}
