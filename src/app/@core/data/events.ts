import {Observable} from "rxjs";
import {User} from "@core/data/users";

export interface Activity {
  id: number;
  event?: number;
  title: string;
  start_datetime: string;
  description: string;
}

export interface Participant {
  id: number;
  event: number;
  user: User;
  vip: boolean;
  ticket?: boolean;
}

export interface Staff {
  id: number;
  event: number;
  user: User;
}

export interface Location {
  id: number;
  name: string;
  street: string;
}

export interface Event {
  id: number;
  code: number;
  name: string;
  tagline: string;
  description: string
  start_datetime: string;
  backup_datetime: string;
  price: number;
  activities: Activity[];
  staff: Staff[];
  location: Location;
}

export abstract class EventsData {
  abstract getEvent(): Observable<Event>;
  abstract getActivities(): Observable<Activity[]>;
  abstract getStaff(): Observable<Staff[]>;

  isEventStarted(end_datetime: string): boolean {
    return new Date() > new Date(end_datetime)
  };
}
