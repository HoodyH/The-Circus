import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsData} from "@core/data/events";
import {NavItems} from "@theme/components/header/header.component";
import { navItems } from './dashboard-nav';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header [showBrand]="false" baseUri="/{{code}}" [navItems]="navItems"></app-header>
    <router-outlet></router-outlet>
  `,
})
export class DashboardComponent implements OnInit {

  code: string;
  navItems: NavItems[] = navItems;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventsData) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.loadEvent(params['id']).subscribe({
        next: (event) => {this.code = event.code ? event.code : ''},
        error: (e) => {
          if (e.status === 404) {
            this.router.navigate(['/black-hole/404']).then();
          }
        }
      });
    });
  }
}
