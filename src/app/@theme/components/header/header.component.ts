import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit(): void {
  }

  isHomePage(): boolean {
    return this.router.isActive(
      '/',
      {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}
    )
  }

  goHome(): void {
    this.router.navigate(['/']).then();
  }

  goBack(): void {
    // Naviga alla route precedente
    this.location.back();
  }

}
