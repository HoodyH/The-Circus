import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '@core/data/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone: string;
  password: string;

  constructor(private router: Router, private authService: AuthData) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.authService.login({phone: this.phone, password: this.password}).subscribe(
      (success) => {
        if (success) {
          this.router.navigate(['']).then();
        }
      }
    )
  }

}
