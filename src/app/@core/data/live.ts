import { Observable, Subject } from "rxjs";

export interface Background {
    color: string;
  }
  
  export abstract class LiveData {

    abstract backgroundSubject: Subject<Background>;
    
    abstract subscribeBackground(): any;
    abstract getBackground(): Observable<Background>;
  }