import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Participant} from '@app/@core/data/events';
import {Poll, PollData, PollVoteCreation, PollVoteDetail} from '@app/@core/data/poll';
import {delay, retry} from "rxjs";

export class ErrorService {
  public readonly noError = "no_error";
  public readonly participantNotFound = "participant_not_found";
  public readonly editTimeExpired = "edit_time_expired";
  public readonly selfVote = "self_vote";
  public readonly pollClosed = "poll_closed";
  public readonly alreadyVoted = "already_voted";
  public readonly genericError = "generic_error";
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {

  polls: Poll[];
  currentPoll: Poll | null;
  currentPollSubscription: any;
  currentPollResults: { firstName: string, lastName: string, count: number }[] = [];
  vote: PollVoteDetail;

  form: FormGroup;

  loading: boolean = true;

  errorService = new ErrorService()
  error: string

  constructor(private fb: FormBuilder, private pollService: PollData) {
    this.form = this.fb.group({
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.currentPollSubscription = setInterval(() => {
      this.getData();
    }, 5000);

    this.pollService.getPollVote().subscribe({
      next: (votes) => {
        if (votes.length) {
          this.vote = votes[0];
        }
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.currentPollSubscription) {
      clearInterval(this.currentPollSubscription);
    }
  }

  getData() {
    this.pollService.getPoll().subscribe((polls) => {
      this.polls = polls;

      // load the fist active poll
      let populated = false;
      for (const poll of polls) {
        if (this.isCurrentlyActive(poll.start_datetime, poll.end_datetime)) {
          this.currentPoll = poll;
          populated = true;
          break;
        }
      }

      // if the poll has changed status or has been deleted, do actions
      // if no active pool found load the latest one as closed
      if (!populated) {
        polls.length > 0 ? this.currentPoll = polls[polls.length - 1] : this.currentPoll = null;
      }

      // if a poll has been loaded, calculate the data
      if (this.currentPoll) {
        const counts: { [key: number]: { firstName: string, lastName: string, count: number } } = {};
        for (const element of this.currentPoll.votes) {
          const vote: Participant = element.vote;

          if (vote.user.id in counts) {
            counts[vote.user.id]['count']++;
          } else {
            counts[vote.user.id] = {
              firstName: vote.user.first_name,
              lastName: vote.user.last_name,
              count: 1
            };
          }
        }

        this.currentPollResults = Object.values(counts).sort((a, b) => b.count - a.count);
      }
    })
  }

  sendVote() {
    if (this.form.valid) {

      this.error = this.errorService.noError;

      const observer = {
        next: (vote: any) => {
          console.log(vote);
          this.vote = vote;
          this.getData();
        },
        error: (error: any) => {
          // error handling
          this.error = this.errorService.genericError;

          if (error.error['vote']) {
            switch (error.error['vote']['code']) {
              case this.errorService.participantNotFound: {
                this.error = this.errorService.participantNotFound;
                break;
              }
              case this.errorService.selfVote: {
                this.error = this.errorService.selfVote;
                break;
              }
            }
          }

          if (error.error['poll']) {
            switch (error.error['poll']['code']) {
              case this.errorService.pollClosed: {
                this.error = this.errorService.pollClosed;
                break;
              }
            }
          }

          if (error.error['code']) {
            switch (error.error['code']) {
              case this.errorService.editTimeExpired: {
                this.error = this.errorService.editTimeExpired;
                break;
              }
              case this.errorService.alreadyVoted: {
                this.error = this.errorService.alreadyVoted;
                break;
              }
            }
          }
        }
      }

      if (this.vote) {
        this.vote.vote = this.form.value['phone']
        this.pollService.putPollVote(this.vote.id, this.vote).subscribe(observer)
      } else {
        if (this.currentPoll) {
          const newVote: PollVoteCreation = {
            poll: this.currentPoll.id,
            vote: this.form.value['phone']
          }
          this.pollService.postPollVote(newVote).subscribe(observer)
        }
      }
    }
  }

  isExpired(end_datetime: Date): boolean {
    return end_datetime ? new Date() > end_datetime : false
  };

  isCurrentlyActive(start_datetime: string, end_datetime: string): boolean {
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
}
