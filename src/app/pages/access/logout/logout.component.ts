import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '@app/@core/data/auth';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthData) {}

  ngOnInit(): void {
    this.authService.logout().subscribe();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

}
