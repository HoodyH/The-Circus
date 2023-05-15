import { Component } from '@angular/core';

@Component({
  selector: 'ios-manned-pages-component',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <!-- app-footer></app-footer -->
  `,
})

export class PagesComponent {
}
