import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthData } from '@core/data/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone: string;
  password: string;

  next: string

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthData) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']).then();
    }

    if (this.route.snapshot.queryParams['next']) {
        this.next = this.route.snapshot.queryParams['next'];
    }
  }

  onSubmit() {
    this.authService.login({phone: this.phone, password: this.password}).subscribe(
      (success) => {
        if (success) {
          if (this.next) {
            this.router.navigateByUrl(this.next).catch(
              () => this.router.navigate(['']).then()
            );
          } else {
            this.router.navigate(['']).then()
          }
        }
      }
    )
  }

}
