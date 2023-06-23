import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UsersData} from "@core/data/users";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userData: UsersData, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userData.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/access/login'], {queryParams:{'next':state.url}}).then();
      return false;
    }
  }
}
