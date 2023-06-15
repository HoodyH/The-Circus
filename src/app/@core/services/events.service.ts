import {Injectable} from '@angular/core';
import {Observable, tap, map} from 'rxjs';
import {EventsData, Event, Participant} from '@core/data/events';
import {ApiUrls} from "@core/data/api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService extends EventsData {

  constructor(private http: HttpClient) {
    super();
  }

  override loadEvent(id: string) {
    this._eventId = id;
    return this.http.get<Event>(`${ApiUrls.U_EVENT(this.eventId)}`).pipe(
      tap((event: Event) => {
        this.event = event;
      }),
      // send forward the result
      map((event: Event) => event)
    );
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${ApiUrls.U_EVENT(id)}`);
  }

  getParticipants(id: string): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${ApiUrls.U_PARTICIPANTS()}?event__code=${id}`);
  }
}
