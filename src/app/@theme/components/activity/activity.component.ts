import {Component, Input, OnInit} from '@angular/core';
import {ActivityAction} from "@core/data/events";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  @Input() live: boolean = false;
  @Input() title: string;
  @Input() description: string;
  @Input() actions: ActivityAction[] = [];

}
