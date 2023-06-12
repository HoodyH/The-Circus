import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent {

  currentTime: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
