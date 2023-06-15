import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsData} from "@core/data/events";

@Component({
  selector: 'app-live',
  template: `<router-outlet></router-outlet>`
})
export class LiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventsData) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.loadEvent(params['id']).subscribe({
        next: () => {},
        error: (e) => {
          if (e.status === 404) {
            this.router.navigate(['/black-hole/404']).then();
          }
        }
      });
    });
  }
}
