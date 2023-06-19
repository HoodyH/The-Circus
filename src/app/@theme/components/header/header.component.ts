import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import { AuthData } from '@app/@core/data/auth';
import { User, UsersData } from '@app/@core/data/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User
  userRequestPending: boolean = false;
  isUserDropdownOpen: boolean = false;

  constructor(private router: Router, private location: Location, public authService: AuthData, 
              public userService: UsersData) {
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
    if (this.location.back) {
      this.location.back();
    } else {
      this.goHome();
    }
  }

  get loggedUser(): User {
    if (!this.user && !this.userRequestPending) {
      this.userRequestPending = true;
      this.userService.getUser().subscribe({
        next: (user) => {
          this.user = user;
          this.userRequestPending = false;
        }
      })
    }
    return this.user
  }

}
