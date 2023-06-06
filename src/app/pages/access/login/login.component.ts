import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthData} from '@core/data/auth';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFailed = false;
  loginSuccess = false;
  next: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthData,
              private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    if (this.route.snapshot.queryParams['next']) {
      this.next = this.route.snapshot.queryParams['next'];
    }

    let login = false;
    if (this.route.snapshot.queryParams['key']) {
      login = this.autoLogin(this.route.snapshot.queryParams['key']);
    }

    if (!login && this.authService.isLoggedIn()) {
      this.router.navigate(['']).then();
    }
  }

  autoLogin(key: string): boolean {
    const decodedKey = Buffer.from(key, 'base64').toString('latin1');
    const [phone, password] = decodedKey.split(",");

    this.loginForm.patchValue({phone, password});

    this.onSubmit();
    return true
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loginFailed = false;

    const data = {
      phone: this.loginForm.value.phone,
      password: this.loginForm.value.password,
    }

    this.authService.login(data).subscribe({
      next: (success) => {
        if (success) {
          this.loginFailed = false;
          this.loginSuccess = true;
          setTimeout(() => {
            if (this.next) {
              this.router.navigateByUrl(this.next).catch(
                () => this.router.navigate(['']).then()
              );
            } else {
              this.router.navigate(['']).then()
            }
          }, 1000)
        }
      },
      error: (err => {
        this.loginFailed = true;
      })
    })
  }

}
