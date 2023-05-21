import { Component, OnInit } from '@angular/core';
import { Poll, PollData } from '@app/@core/data/poll';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  phoneNumber: string;
  nationalPrefix = '+39';

  poll: Poll

  constructor(private pollService: PollData) { }

  ngOnInit(): void {
    this.pollService.getPoll().subscribe((poll) => {
      this.poll = poll[0];
    })
  }

  formatPhoneNumber() {
    this.phoneNumber = this.phoneNumber.replace(/\D/g, ''); // Rimuove tutti i caratteri non numerici
    const match = this.phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      this.phoneNumber = match[1] + '-' + match[2] + '-' + match[3];
    }
  }

}
