import { Component, OnInit } from '@angular/core';
import {Poll, PollData, PollVoteDetail} from '@app/@core/data/poll';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  poll: Poll = {
    question: '',
    votes: []
  };
  vote: PollVoteDetail = {
    poll: 0,
    vote: '',
  };
  nationalPrefix = '+39';

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
      }
    )
  }
}
