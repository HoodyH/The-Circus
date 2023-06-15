import {Injectable} from '@angular/core';
import {Observable, tap, map} from 'rxjs';
import {EventsData, Event, Participant} from '@core/data/events';
import {ApiUrls} from "@core/data/api";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class EventsService extends EventsData {

  constructor(public http: HttpClient) {
    super();
  }

  loadEvent(eventCode: string) {
    this._eventCode = eventCode;
    return this.getEvent(this.eventCode).pipe(
      tap((event: Event) => {
        this.event = event;
      }),
      // send forward the result
      map((event: Event) => event)
    );
  }

  getEvent(eventCode: string): Observable<Event> {
    return this.http.get<Event>(`${ApiUrls.U_EVENT(eventCode)}`);
  }

  getParticipants(eventCode: string): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${ApiUrls.U_PARTICIPANTS()}?event__code=${eventCode}`);
  }
}
