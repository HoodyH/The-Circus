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

export interface Staff {
  id?: number;
  name: string;
  phone: string;
  telegram?: string;
}


export abstract class EventsData {
  abstract getEvent(): Observable<Event>;
  abstract getActivities(): Observable<Activity[]>;
  abstract getStaff(): Observable<Staff[]>;
}
