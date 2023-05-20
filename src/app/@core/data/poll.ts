import {Observable} from "rxjs";

export interface PollChoice {
  id?: number;
  phone: string;
}


export abstract class PollData {
  abstract getPollStatus(): Observable<PollChoice[]>;
  abstract postPollChoice(): Observable<PollChoice>;
}
