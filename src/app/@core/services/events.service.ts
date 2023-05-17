import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {EventsData, Event, Activity, Staff} from '@core/data/events';

@Injectable()
export class EventsService extends EventsData {

  private activitiesData: Activity[] = [{
    id: 1,
    title: 'Aperitoga',
    time: '2023-06-10T17:00:00Z',
    description: "Panini, pizzette, olive ascolane, tramezzini, fritture varie e molti altri stuzzichini",
  },
  {
    id: 2,
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
    id: 4,
    title: 'Toga Award',
    time: '2023-06-10T21:00:00Z',
    description: 'Il miglior costume della serata riceverà il magico Toga Award',
  },
  {
    id: 5,
    title: 'Toga strip',
    time: '2023-06-10T22:00:00Z',
    description: 'Liberate la vostra mente',
  }];

  private staffData: Staff[] = [
    {
      name: "Simone",
    },
    {
      name: "Luca",
    },
    {
      name: "Alessandro",
    }
  ]

  private eventData: Event = {
    id: 1,
    timestamp: new Date('2023-06-10T18:30:00'),
    activities: this.activitiesData,
    staff: this.staffData,
    location: {
      name: 'Not House',
      street: 'Magnano in Riviera (UD)'
    }
  }

  getEvent(): Observable<Event> {
    return observableOf(this.eventData);
  }

  getActivities(): Observable<Activity[]> {
    return observableOf(this.activitiesData);
  }

  getStaff(): Observable<Staff[]> {
    return observableOf(this.staffData);
  }
}
