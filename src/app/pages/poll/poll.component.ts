import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Poll, PollData, PollVoteCreation, PollVoteDetail} from '@app/@core/data/poll';

export class ErrorService {
  public readonly participantNotFound = "participant_not_found";
  public readonly editTimeExpired = "edit_time_expired";
  public readonly selfVote = "self_vote";
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  polls: Poll[];
  currentPoll: Poll;
  vote: PollVoteDetail;

  form: FormGroup;

  errorService = new ErrorService()
  error: string



  constructor(private fb: FormBuilder, private pollService: PollData) {
    this.form = this.fb.group({
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.getData();
    this.pollService.getPollVote().subscribe(
      (votes) => {
        if (votes.length) {
          this.vote = votes[0];
        }
      }
    )
  }

  getData() {
    this.pollService.getPoll().subscribe((polls) => {
      this.polls = polls;
      // load the fist usable poll
      for (const poll of polls) {
        if (!this.isExpired(poll.end_datetime)) {
          this.currentPoll = poll;
          break;
        }
      }
    })
  }

  sendVote() {
    if (this.form.valid) {

      const observer = {
        next: (vote: any) => {
          console.log(vote);
          this.vote = vote;
          this.getData();
        },
        error: (error: any) => {

          if (error.error['code']) {
            if (error.error['code'] === this.errorService.editTimeExpired) {
              this.error = this.errorService.editTimeExpired;
            }
          }

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

          }

        }
      }


      if (this.vote) {
        this.vote.vote = this.form.value['phone']
        this.pollService.putPollVote(this.vote.id, this.vote).subscribe(observer)
      } else {
        const newVote: PollVoteCreation = {
          poll: this.currentPoll.id,
          vote: this.form.value['phone']
        }
        this.pollService.postPollVote(newVote).subscribe(observer)
      }


    }
  }

  isExpired(end_datetime: Date): boolean {
    return end_datetime ? new Date() > end_datetime : false
  };

  isCurrentlyActive(start_datetime: Date, end_datetime: Date): boolean {
    const now = new Date();
    if (start_datetime && end_datetime) {
      return now >= start_datetime && now <= end_datetime;
    } else if (start_datetime) {
      return now >= start_datetime;
    } else if (end_datetime) {
      return now <= end_datetime;
    }
    return false;
  };
}
