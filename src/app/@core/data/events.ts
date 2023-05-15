import {Observable} from "rxjs";

export interface Event {
  id: number;
  timestamp: Date;
}

export interface Activity {
  id: number;
  title: string;
  time: string;
  description: string;
}


export abstract class EventsData {
  abstract getEvent(): Observable<Event>;
  abstract getActivities(): Observable<Activity[]>;
}
