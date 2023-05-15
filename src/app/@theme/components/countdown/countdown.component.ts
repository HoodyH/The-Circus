import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() eventDate = new Date('2023-06-10T23:59:59');

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      const difference = Math.floor((this.eventDate.getTime() - now.getTime()) / 1000);

      this.days = Math.floor(difference / 86400);
      this.hours = Math.floor((difference % 86400) / 3600);
      this.minutes = Math.floor((difference % 3600) / 60);
      this.seconds = difference % 60;
    }, 1000);
  }

}
