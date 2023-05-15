import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { EventsData, Event, Activity } from '@core/data/events';

@Injectable()
export class EventsService extends EventsData {

  private eventData: Event = {
    id: 1,
    timestamp: new Date('2023-06-10T23:59:59'),
  };

  private activitiesData: Activity[] = [{
    id: 1,
    title: 'Welcome',
    time: '2023-05-15T13:30:00Z',
    description: 'Benvenuti'
  },
  {
    id: 2,
    title: 'Attività 2',
    time: '2023-05-15T13:30:00Z',
    description: 'Descrizione dell\'attività 2',
  },
  {
    id: 3,
    title: 'Attività 3',
    time: '2023-05-15T16:45:00Z',
    description: 'Descrizione dell\'attività 3',
  }];

  getEvent(): Observable<Event> {
    return observableOf(this.eventData);
  }

  getActivities(): Observable<Activity[]> {
    return observableOf(this.activitiesData);
  }
}
