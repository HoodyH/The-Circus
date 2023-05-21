import {Observable} from "rxjs";

export interface PollVote {
  vote: string;
}

export interface PollVoteDetail {
  id?: number;
  poll: number;
  vote: string;
  voted_at: Date;
  is_vote_editable: boolean
}

export interface Poll {
  event: number;
  question: string;
  start_at: Date;
  end_at: Date;
  is_active: boolean;
  votes: PollVote[];
}


export abstract class PollData {
  abstract getPoll(): Observable<Poll[]>;
  abstract postPollVote(data: PollVoteDetail): Observable<PollVoteDetail>;
  abstract putPollVote(id: number, data: PollVoteDetail): Observable<PollVoteDetail>;
  abstract deletePollVote(id: number): Observable<PollVoteDetail>;
}
