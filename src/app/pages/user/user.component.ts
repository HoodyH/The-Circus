import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
