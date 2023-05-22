import {Observable} from "rxjs";
import {Participant} from "@core/data/events";

export interface PollVote {
  vote: Participant;
}

export interface PollVoteDetail {
  id?: number;
  poll: number;
  vote: Participant | any;
  voted_at?: Date;
  is_vote_editable?: boolean
}

export interface Poll {
  id?: number;
  event?: number;
  question: string;
  start_at?: Date;
  end_at?: Date;
  is_active?: boolean;
  votes: PollVote[];
}


export abstract class PollData {
  abstract getPoll(): Observable<Poll[]>;
  abstract getPollVote(): Observable<PollVoteDetail[]>;
  abstract postPollVote(data: PollVoteDetail): Observable<PollVoteDetail>;
  abstract putPollVote(id: number, data: PollVoteDetail): Observable<PollVoteDetail>;
  abstract deletePollVote(id: number): Observable<PollVoteDetail>;
}
