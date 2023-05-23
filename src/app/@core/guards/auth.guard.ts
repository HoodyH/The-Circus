import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthData} from "@core/data/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthData, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/access/login']).then();
      return false;
    }
  }
}