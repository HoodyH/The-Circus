import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from "@core/data/events";

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnInit {

  @Input() eventDate: string;
  @Input() activities: Activity[] = []
  @Input() showActivitiesActions: boolean = true
  @Output() currentActivityChange: EventEmitter<Activity> = new EventEmitter<Activity>()

  currentActivity: Activity
  nextActivity: Activity

  ngOnInit(): void {
    this.getCurrentActivity();
    setInterval(() => {
      this.getCurrentActivity();
    }, 1000);
  }

  getCurrentActivity() {
    if (this.activities.length > 0) {
      const now = new Date();
      const startedActivities = this.activities.filter(activity => new Date(activity.start_datetime) <= now);
      const activity = startedActivities.reduce((prev, current) => {
        return new Date(current.start_datetime) > new Date(prev.start_datetime) ? current : prev;
      });

      if (activity != this.currentActivity) {
        this.currentActivity = activity;
        this.currentActivityChange.emit(activity);
      }
    }
  }

}
