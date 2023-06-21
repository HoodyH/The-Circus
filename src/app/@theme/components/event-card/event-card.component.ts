import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Event} from "@core/data/events";


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  @Input() event: Event;

  constructor(private routerService: Router) { }

}
