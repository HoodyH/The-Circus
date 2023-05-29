import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "@core/data/events";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  @Input() title: string
  @Input() description: string

}
