import {Observable} from "rxjs";
import {Participant} from "@core/data/events";

export interface PollVote {
  vote: Participant;
  voted_at: string;
}

export interface PollVoteDetail {
  id: number;
  poll: number;
  vote: Participant;
  voted_at: string;
  is_vote_editable?: boolean
}

export interface PollVoteCreation {
  poll: number;
  vote: string;
}

export interface Poll {
  id: number;
  event: number;
  question: string;
  start_datetime: string;
  end_datetime: string;
  is_active: boolean;
  is_ended: boolean;
  votes: PollVote[];
}

export interface PollCountResult {
  firstName: string;
  lastName: string;
  count: number;
  lastVoteAt: string;
}



export abstract class PollData {
  abstract getPoll(): Observable<Poll[]>;
  abstract getPollVote(): Observable<PollVoteDetail[]>;
  abstract postPollVote(data: PollVoteCreation): Observable<PollVoteDetail>;
  abstract putPollVote(id: number, data: PollVoteDetail): Observable<PollVoteDetail>;
  abstract deletePollVote(id: number): Observable<PollVoteDetail>;

  isClosed(end_datetime: string): boolean {
    return new Date() > new Date(end_datetime)
  };

  isActive(start_datetime: string, end_datetime: string): boolean {
    const now = new Date();
    const start = new Date(start_datetime);
    const end = new Date(end_datetime);
    if (start && end_datetime) {
      return now >= start && now <= end;
    } else if (start) {
      return now >= start;
    } else if (end) {
      return now <= end;
    }
    return false;
  };

  isFuture(start_datetime: string): boolean {
    return new Date() < new Date(start_datetime);
  }

  /**
   *
   * @param votes list of poll votes
   * @returns ordered PollCountResult
   */
  generateResults(votes: PollVote[]): PollCountResult[]  {

    votes.sort((a: PollVote, b: PollVote) => {
      return new Date(a.voted_at).getTime() - new Date(b.voted_at).getTime();
    });

    const counts: { [key: number]: PollCountResult } = {};
    for (const element of votes) {
      const vote: Participant = element.vote;

      if (vote.user.id in counts) {
        counts[vote.user.id]['count']++;
      } else {
        counts[vote.user.id] = {
          firstName: vote.user.first_name,
          lastName: vote.user.last_name,
          count: 1,
          lastVoteAt: ''
        };
      }
    }

    return Object.values(counts).sort((a, b) => b.count - a.count);
  }
}
