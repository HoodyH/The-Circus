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

export interface LiveData {
  message: string
}

export const defaultBackground: Background = {
  color: '#eee'
}

export abstract class LiveData {

  protected liveSocket: WebSocket;

  public backgroundSubject: Subject<Background> = new Subject<Background>();
  public liveSubject: Subject<LiveData> = new Subject<LiveData>();
  
  abstract subscribeBackground(): any;
  abstract getBackground(): Observable<Background>;
  abstract getSongPlaying() : Observable<SongPlaying>

  // websockets
  abstract connectLiveSocket(eventCode?: string): void
  abstract disconnectLiveSocket(): void
}
