import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {EventsData, Event, Activity, Staff, Participant} from '@core/data/events';
import {Poll} from "@core/data/poll";
import {ApiUrls} from "@core/data/api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService extends EventsData {

  private activitiesData: Activity[] = [{
    id: 1,
    title: 'Aperitoga',
    start_datetime: '2023-06-10T17:00:00Z',
    description: "Panini, pizzette, olive ascolane, tramezzini, fritture varie e molti altri stuzzichini",
  },
  {
    id: 2,
    title: 'Tojito',
    start_datetime: '2023-06-10T19:00:00Z',
    description: 'Il cocktail pensato dalle migliori menti divine',
  },
  {
    id: 3,
    title: 'Toga dance',
    start_datetime: '2023-06-10T20:00:00Z',
    description: 'Si alza il volume della musica e si inizia a ballare, la rimozione della toga non è ancora consentito',
  },
  {
    id: 4,
    title: 'Toga Award',
    start_datetime: '2023-06-10T21:00:00Z',
    description: 'Vota per eleggere il miglior costume della serata, che riceverà il magico Toga Award.',
  },
  {
    id: 5,
    title: 'Toga strip',
    start_datetime: '2023-06-10T22:00:00Z',
    description: 'Liberate la vostra mente, e perchè no, anche i vostri corpi',
  }];

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
