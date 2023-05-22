import { Component, OnInit } from '@angular/core';
import {Poll, PollData, PollVoteDetail} from '@app/@core/data/poll';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  poll: Poll;
  vote: PollVoteDetail;
  nationalPrefix = '+39';

  // Variabili per gestire gli errori
  participantNotFoundError = false;
  selfVoteError = false;
  editTimeExpiredError = false;

  constructor(private pollService: PollData) { }

  ngOnInit(): void {
    this.pollService.getPoll().subscribe((polls) => {
      this.poll = polls[0];
      // this.vote.poll = polls[0].id
    })

    this.pollService.getPollVote().subscribe(
      (votes) => {
        if (votes.length) {
          this.vote = votes[0];
        }
      }
    )
  }

  sendVote() {
    this.pollService.postPollVote(this.vote).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        if (error.code === 'participant_not_found') {
          this.participantNotFoundError = true;
        } else if (error.code === 'self_vote') {
          this.selfVoteError = true;
        } else if (error.code === 'edit_time_expired') {
          this.editTimeExpiredError = true;
        }
      }
    )
  }
}
