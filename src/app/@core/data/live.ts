import {Observable, Subject} from "rxjs";

export interface Background {
  color: string;
}

export const defaultBackground: Background = {
  color: '#eee'
}

export abstract class LiveData {

  public backgroundSubject: Subject<Background> = new Subject<Background>();

  abstract subscribeBackground(): any;
  abstract getBackground(): Observable<Background>;
}
