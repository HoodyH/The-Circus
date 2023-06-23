import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersData} from "@core/data/users";


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private userService: UsersData) {}

  ngOnInit(): void {
    this.userService.logout().subscribe();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}
