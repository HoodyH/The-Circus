import {Observable} from "rxjs";
import {User} from "@core/data/users";

export interface Activity {
  id: number;
  title: string;
  time: string;
  description: string;
}

export interface Participant {
  id?: number;
  event?: number;
  user: User;
  vip?: boolean;
  ticket?: boolean;
}

export interface Staff {
  id?: number;
  name: string;
  phone?: string;
  telegram?: string;
}

export interface Location {
  id?: number;
  code?: string;
  name: string;
  street: string;
}

export interface Event {
  id: number;
  timestamp: Date;
  price: number;
  activities: Activity[];
  staff: Staff[];
  location: Location;
}

export abstract class EventsData {
  abstract getEvent(): Observable<Event>;
  abstract getActivities(): Observable<Activity[]>;
  abstract getStaff(): Observable<Staff[]>;
}
