import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {EventsData, Event, Activity, Staff} from '@core/data/events';

@Injectable()
export class EventsService extends EventsData {

  private eventData: Event = {
    id: 1,
    timestamp: new Date('2023-06-10T18:30:00'),
  };

  private activitiesData: Activity[] = [{
    id: 1,
    title: 'Welcome',
    time: '2023-06-10T16:30:00Z',
    description: ""
  },
  {
    id: 2,
    title: 'Aperitoga',
    time: '2023-06-10T17:00:00Z',
    description: 'Panini, pizzette, olive ascolane, tramezzini, fritture varie e molti altri stuzzichini',
  },
  {
    id: 3,
    title: 'Tojito',
    time: '2023-06-10T19:00:00Z',
    description: 'Il cocktail pensato dalle migliori menti',
  },
  {
    id: 3,
    title: 'Toga dance',
    time: '2023-06-10T20:00:00Z',
    description: 'Si alza il volume della musica e si inizia a ballare, la rimozione della toga non è ancora consentito',
  },
  {
    id: 3,
    title: 'Toga strip',
    time: '2023-06-10T22:00:00Z',
    description: 'Ognuno si senta libero di fare quello che crede',
  }];

  private staffData: Staff[] = [
    {
      name: "Simone",
      phone: "+39 333 3333333",
      telegram: '@telegram'
    },
    {
      name: "Luca",
      phone: "+39 333 3333333",
    },
    {
      name: "Alessandro",
      phone: "+39 333 3333333",
    }
  ]

  getEvent(): Observable<Event> {
    return observableOf(this.eventData);
  }

  getActivities(): Observable<Activity[]> {
    return observableOf(this.activitiesData);
  }

  override getStaff(): Observable<Staff[]> {
    return observableOf(this.staffData);
  }
}
