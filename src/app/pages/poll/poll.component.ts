import { ThisReceiver } from '@angular/compiler';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventsData, Participant} from '@app/@core/data/events';
import {Poll, PollData, PollVote, PollVoteCreation, PollVoteDetail} from '@app/@core/data/poll';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

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
  nextPoll: Poll | null;
  votes: PollVoteDetail[];
  vote: PollVoteDetail | null;
  participants: Participant[];
  filteredParticipants: Participant[] = [];
  currentPollSubscription: any;
  currentPollResults: { firstName: string, lastName: string, count: number }[] = [];

  form: FormGroup;

  loading: boolean = true;

  errorService = new ErrorService()
  error: string

  constructor(private fb: FormBuilder, private pollService: PollData, private eventService: EventsData) {
    this.form = this.fb.group({
      id: [null, Validators.required],
      vote: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getData();
    this.currentPollSubscription = setInterval(() => {
      this.getData();
    }, 5000);

    this.eventService.getParticipants().subscribe({
      next: (participants) => {
        this.participants = participants;
      }
    });

    this.form.controls['vote'].valueChanges.subscribe((data: string) => {
      const vote: string = data.toLowerCase();

      if (vote.length >= 3) {
        this.filteredParticipants = this.filterParticipants(vote);
      } else {
        this.filteredParticipants = [];
      }
      console.log(this.filteredParticipants);
    });
  }

  ngOnDestroy(): void {
    if (this.currentPollSubscription) {
      clearInterval(this.currentPollSubscription);
    }
  }

  getData() {
    this.pollService.getPoll().subscribe((polls) => {

      if (!polls.length) {
        this.loading = false;
      }
      this.polls = polls;
      this.nextPoll = null;
      let populated = false;
      const currentPoll = this.currentPoll;

      for (const poll of polls) {

        if (this.pollService.isActive(poll.start_datetime, poll.end_datetime)) {
          // if the poll has changed from the current one
          this.currentPoll = poll;
          populated = true;

          // update vote only on poll change
          if ((!currentPoll && currentPoll !== poll )|| (currentPoll && currentPoll.id !== poll.id)) {
            this.vote = null;
            // load the votes on poll change
            this.pollService.getPollVote().subscribe({
              next: (votes) => {
                this.votes = votes.filter(vote => {
                  if (this.currentPoll) { return vote.poll === this.currentPoll.id }
                  return false
                });
                if (this.votes.length) {
                  this.vote = this.votes[0];
                }
                this.loading = false;
              }
            });
          }
          break;

        } else {
          // if the poll has changed status or has been deleted, do actions
          // if no active pool found load the latest one as closed
          if (this.pollService.isClosed(poll.end_datetime) && !populated) {
            this.currentPoll = poll;
          }
        }

        // get fist future poll
        if (!this.nextPoll && this.pollService.isFuture(poll.start_datetime)) {
          this.nextPoll = poll;
        }
      }

      // if a poll has been loaded, calculate the data
      if (this.currentPoll) {

        // sort votes based on voting time
        this.currentPoll.votes.sort((a: PollVote, b: PollVote) => {
          return new Date(a.voted_at).getTime() - new Date(b.voted_at).getTime();
        });

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

  filterParticipants(value: string): Participant[] {
    return this.participants.filter((participant: Participant) => {
      const fullName = `${participant.user.first_name} ${participant.user.last_name}`.toLowerCase();
      return fullName.includes(value);
    });
  }

  selectParticipant(participant: any): void {
    // Esegui le operazioni desiderate con il partecipante selezionato
    this.form.patchValue({id: participant.id, vote: `${participant.user.first_name} ${participant.user.last_name}`})
    this.filteredParticipants = [];
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
        this.vote.vote = this.form.value['id']
        this.pollService.putPollVote(this.vote.id, this.vote).subscribe(observer)
      } else {
        if (this.currentPoll) {
          const newVote: PollVoteCreation = {
            poll: this.currentPoll.id,
            vote: this.form.value['id']
          }
          this.pollService.postPollVote(newVote).subscribe(observer)
        }
      }
    }
  }
}
