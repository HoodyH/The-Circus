import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {EventsData, Event, Activity, Staff, Participant} from '@core/data/events';
import {Poll} from "@core/data/poll";
import {ApiUrls} from "@core/data/api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService extends EventsData {

  constructor(private http: HttpClient) {
    super();
  }

  getEvent(): Observable<Event> {
    return this.http.get<Event>(`${ApiUrls.U_EVENT(ApiUrls.EVENT_ID)}`);
  }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${ApiUrls.U_PARTICIPANTS()}?event__code=${ApiUrls.EVENT_ID}`);
  }
}
