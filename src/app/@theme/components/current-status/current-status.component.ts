import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "@core/data/events";

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnInit {

  @Input() eventDate: string;
  @Input() activities: Activity[] = []

  currentActivity: Activity

  ngOnInit(): void {
    this.getCurrentActivity();
    setInterval(() => {
      this.getCurrentActivity();
    }, 5000);
  }

  getCurrentActivity() {
    if (new Date(this.eventDate) < new Date()) {
      if (this.activities.length > 0) {
        this.currentActivity = this.activities.reduce((prev, current) => {
          return new Date(current.start_datetime) > new Date(prev.start_datetime) ? current : prev;
        });
      }
    }
  }

}
