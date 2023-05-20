import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {PollChoice, PollData} from "@core/data/poll";

@Injectable()
export class PollService extends PollData {

  private pollChoices: PollChoice[] = [{
    phone: '33333333',
  },{
    phone: '33333333',
  },{
    phone: '33333333',
  },{
    phone: '33333333',
  }];

  getPollStatus(): Observable<PollChoice[]> {
    return observableOf(this.pollChoices);
  }

  postPollChoice(): Observable<PollChoice> {
    return observableOf({phone: '33333333'});
  }
}
