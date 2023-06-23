import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsData} from "@core/data/events";
import {ErrorsData, ErrorCode} from "@core/data/errors";
import {NavItems} from "@theme/components/header/header.component";
import {navItems} from "./event-nav";

@Component({
  selector: 'app-event',
  template: `
    <app-header [showBrand]="false" baseUri="{{code}}" [navItems]="navItems"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class EventComponent implements OnInit {

  code: string;
  navItems: NavItems[] = navItems;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventsData,
              private errorService: ErrorsData) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.loadEvent(params['id']).subscribe({
        next: (event) => {this.code = event.code ? event.code : ''},
        error: (e) => {
          if (e.status === 404) {
            this.errorService.displayError(ErrorCode.EVENT_NOT_FOUND_ERROR);
          }
        }
      });
    });
  }

}
