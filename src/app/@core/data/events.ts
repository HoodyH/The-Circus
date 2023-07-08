import {Observable} from "rxjs";
import {User} from "@core/data/users";

export enum LiveScreenTypes {
  CAROUSEL = 'carousel',
  POLL = 'poll',
}

export enum ActivityLinkTypes {
  SPOTIFY = 'spotify',
  LINK = 'website',
  POLL = 'poll',
  PAGE = 'page',
}

export interface ActivityAction {
  id: number;
  type: ActivityLinkTypes;
  name: string;
  url: string;
  blank: boolean;
  is_live_only: boolean;
  description: string;
}

export interface LiveConfiguration {
  id: number;
  name: string;
  lights: boolean;
  main_block: LiveScreenTypes;
}

export interface Activity {
  id: number;
  event?: number;
  title: string;
  start_datetime: string;
  description: string;
  live_description: string;
  actions: ActivityAction[];
  live_configuration: LiveConfiguration;
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
  code: string;
  name: string;
  tagline: string;
  description: string
  start_datetime: string;
  end_datetime: string;
  backup_datetime: string;
  price: number;
  activities: Activity[];
  staff: Staff[];
  location: Location;
}

export const defaultLiveScreenConfiguration: LiveConfiguration = {
    id: 0,
    name: 'default',
    main_block: LiveScreenTypes.CAROUSEL,
    lights: false,
  }

export abstract class EventsData {

  protected event: Event;
  protected _eventCode: string;

  abstract loadEvent(eventCode: string): Observable<Event>;
  abstract getEvents(): Observable<Event[]>;
  abstract getEvent(eventCode: string): Observable<Event>;
  abstract getParticipants(eventCode: string): Observable<Participant[]>;

  get eventCode(): string {
    return this._eventCode;
  }

  get isEventStarted(): boolean {
    return new Date() > new Date(this.event.start_datetime)
  };

  get isEventEnded(): boolean {
    return new Date() > new Date(this.event.end_datetime)
  };
}
