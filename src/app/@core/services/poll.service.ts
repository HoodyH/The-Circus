import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from '@core/data/api';
import {PollVoteDetail, Poll, PollData} from "@core/data/poll";



@Injectable()
export class PollService extends PollData {

  constructor(private http: HttpClient) {
    super();
  }

  getPoll(): Observable<Poll[]> {
    return this.http.get<Poll[]>(ApiUrls.U_POLL());
  }

  getPollVote(): Observable<PollVoteDetail[]> {
    return this.http.get<PollVoteDetail[]>(ApiUrls.U_POLL_VOTE());
  }

  postPollVote(data: PollVoteDetail): Observable<PollVoteDetail> {
    return this.http.post<PollVoteDetail>(ApiUrls.U_POLL_VOTE(), data);
  }

  putPollVote(id: number, data: PollVoteDetail): Observable<PollVoteDetail> {
    return this.http.post<PollVoteDetail>(`${ApiUrls.U_POLL_VOTE()}${id}/`, data);
  }

  deletePollVote(id: number): Observable<PollVoteDetail> {
    return this.http.delete<PollVoteDetail>(`${ApiUrls.U_POLL_VOTE()}${id}/`);
  }
}
