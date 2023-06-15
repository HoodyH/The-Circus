import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "@core/data/events";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() activities: Activity[] = []

  ngOnInit(): void {
  }

}
