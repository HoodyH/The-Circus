import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() eventDate: string;

  date: Date
  days: number = 0;
  hours: number = 23;
  minutes: number = 59;
  seconds: number = 59;

  ngOnInit() {
    this.date = new Date(this.eventDate);
    this.calculateCountDown();

    setInterval(() => {
      this.calculateCountDown()
    }, 1000);
  }

  calculateCountDown() {
    if (this.date) {
      const now = new Date();
      const difference = Math.floor((this.date.getTime() - now.getTime()) / 1000);

      this.days = Math.floor(difference / 86400);
      this.hours = Math.floor((difference % 86400) / 3600);
      this.minutes = Math.floor((difference % 3600) / 60);
      this.seconds = difference % 60;

      if (difference < 0) {
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }
  }

}
