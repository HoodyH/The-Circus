import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsData} from "@core/data/events";

@Component({
  selector: 'app-pages-component',
  template: `
    <router-outlet></router-outlet>
  `
})

export class PagesComponent {
}
