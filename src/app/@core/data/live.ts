import {Observable, Subject} from "rxjs";

export interface Background {
  color: string;
}

export const defaultBackground: Background = {
  color: '#eee'
}

export abstract class LiveData {

  abstract backgroundSubject: Subject<Background>;
  abstract subscribeBackground(): any;
  abstract getBackground(): Observable<Background>;
}
