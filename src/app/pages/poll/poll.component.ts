import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventsData} from '@app/@core/data/events';
import {
  Poll,
  PollCountResult,
  PollData, PollLiveData,
  PollVoteCreation,
  PollVoteDetail
} from '@app/@core/data/poll';
import {Option} from "@theme/components/dropdown/dropdown.component";


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

  pollLiveData: PollLiveData;

  votes: PollVoteDetail[];
  vote: PollVoteDetail | null;
  options: Option[] = [];

  voteCheckSubscription: any;
  currentPollSubscription: any;

  form: FormGroup;

  /**
   * The page is loading the data, show the spinner
   */
  loading: boolean = true;

  errorService = new ErrorService()
  error: string

  constructor(private fb: FormBuilder, private pollService: PollData, private eventService: EventsData) {
    this.form = this.fb.group({
      vote: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getData();

    this.currentPollSubscription = setInterval(() => {
      this.getData();
    }, 5000);

    // locally update is_vote_editable when time is expired
    this.voteCheckSubscription = setInterval(() => {
      if( this.vote && this.vote.is_vote_editable ) {
        if (new Date(Date.now() - 5 * 60 * 1000) > new Date(this.vote.voted_at)) {
          this.vote.is_vote_editable = false;
        }
      }
    }, 1000);

    // get event participants and create the options for the drop down selection
    this.eventService.getParticipants().subscribe({
      next: (participants) => {
        this.options = participants.map((participant) => {
          return {id: participant.id, value: `${participant.user.first_name} ${participant.user.last_name}`};
        });
      }
    });
  }

  /**
   * Unsubscribe from intervals and other subscriptions
   */
  ngOnDestroy(): void {
    if (this.voteCheckSubscription) {
      clearInterval(this.voteCheckSubscription);
    }
    if (this.currentPollSubscription) {
      clearInterval(this.currentPollSubscription);
    }
  }

  /**
   * Popolate the data of the poll
   * currentPoll, nextPoll, generate results
   */
  getData() {
    this.pollService.getPoll().subscribe((polls) => {

      if (!polls.length) {
        this.loading = false;
      }

      let currentPoll = null;
      if (this.pollLiveData) {
        currentPoll = this.pollLiveData.currentPoll;
      }

      this.pollLiveData = this.pollService.getPollData(polls)

      // loading done
      // will be set again as true if the vote have to be load
      this.loading = false;

      if (this.pollLiveData.currentPoll && this.pollLiveData.populated){
        // update vote only on poll change
        if ((!currentPoll && currentPoll !== this.pollLiveData.currentPoll) || (currentPoll && currentPoll.id !== this.pollLiveData.currentPoll.id)) {
          this.loading = true;
          this.vote = null;
          // load the votes on poll change
          this.pollService.getPollVote().subscribe({
            next: (votes) => {
              this.loading = false;
              this.votes = votes.filter(vote => {
                if (this.pollLiveData.currentPoll) {
                  return vote.poll === this.pollLiveData.currentPoll.id
                }
                return false
              });
              if (this.votes.length) {
                this.vote = this.votes[0];
                this.form.setValue({vote: this.vote.vote.id})
              }
            },
            error: () => { this.loading = false; }
          });
        }
      }
    })
  }

  /**
   * Not used yet but, the idea is that the vote can be deleted by the user
   * Backend deletion is disabled atm
   * @param event
   */
  deleteVote(event: Option | null) {
    if (event) {
      this.error = '';

      // this.pollService.deletePollVote(event.id).subscribe({
      //   next: () => {
      //     this.form.reset({vote: null});
      //     this.vote = null;
      //   }
      // })
    }
  }

  /**
   * Post or put the vote
   * @param event
   */
  sendVote(event: Option | null) {
    if (!event) {
      return
    }

    this.form.setValue({vote: event.id})

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
          console.log(this.vote);
        }
      }

      // chose post or put and call api
      if (this.vote) {
        this.vote.vote = this.form.value['vote']
        this.pollService.putPollVote(this.vote.id, this.vote).subscribe(observer)
      } else {
        if (this.pollLiveData.currentPoll) {
          const newVote: PollVoteCreation = {
            poll: this.pollLiveData.currentPoll.id,
            vote: this.form.value['vote']
          }
          this.pollService.postPollVote(newVote).subscribe(observer)
        }
      }
    }
  }
}
