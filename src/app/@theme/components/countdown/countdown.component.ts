import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() eventDate: Date;

  days: number = 0;
  hours: number = 23;
  minutes: number = 59;
  seconds: number = 59;

  ngOnInit() {
    setInterval(() => {
      if (this.eventDate) {
        const now = new Date();
        const difference = Math.floor((this.eventDate.getTime() - now.getTime()) / 1000);

        this.days = Math.floor(difference / 86400);
        this.hours = Math.floor((difference % 86400) / 3600);
        this.minutes = Math.floor((difference % 3600) / 60);
        this.seconds = difference % 60;
      }
    }, 1000);
  }

}
