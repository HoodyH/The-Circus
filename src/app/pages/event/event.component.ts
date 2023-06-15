import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
