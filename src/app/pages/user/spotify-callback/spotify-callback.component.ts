import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersData } from '@app/@core/data/users';

@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.css']
})
export class SpotifyCallbackComponent implements OnInit {

  code: string;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UsersData) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['code']) {
      this.code = this.route.snapshot.queryParams['code'];

      this.userService.getUserSpotifyConnectCallback(this.code).subscribe({
        next: () => {
          this.router.navigate(['/me']).then()
        }
      })
    }
  }

}
