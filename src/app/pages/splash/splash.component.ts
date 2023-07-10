import { Component, OnInit } from '@angular/core';
import { navItems } from './splash-nav';
import { NavItems } from '@app/@theme/components/header/header.component';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  navItems: NavItems[] = navItems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
