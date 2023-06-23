import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Event, EventsData} from "@core/data/events";
import {SpotifyAccess, User, UsersData} from "@core/data/users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  userDataForm: FormGroup;

  user: User;
  userEvents: Event[] = [];
  spotifyAccess: SpotifyAccess | null;

  constructor(private formBuilder: FormBuilder, private eventService: EventsData, private userService: UsersData,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group({
      personalInfo: this.formBuilder.group({
        firstName: { value: '', disabled: true },
        lastName: { value: '', disabled: true },
        phoneNumber: { value: '', disabled: true },
        email: { value: '', disabled: true },
      }),
      events: this.formBuilder.array([])
    });

    this.userService.getUser().subscribe({
      next: (user) => {
        this.user = user;
        const personalInfo = this.userDataForm.get('personalInfo') as FormGroup;
        personalInfo.patchValue({
          firstName: user.first_name,
          lastName: user.last_name,
          phoneNumber: user.phone,
          email: user.email
        });
      }
    })

    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.userEvents = events.sort((a, b) => {
          const dateA = new Date(a.start_datetime);
          const dateB = new Date(b.start_datetime);
          return dateB.getTime() - dateA.getTime();
        });
      }
    })

    this.userService.getUserSpotifyAccess().subscribe({
      next: (spotifyAccess) => {
        this.spotifyAccess = spotifyAccess;
      }
    });
  }

  connectSpotify() {
    this.userService.getUserSpotifyConnectData().subscribe({
      next: (data) => {
        console.log(data);
        window.open(data.auth_url);
      }
    });
  }

  disconnectSpotify() {
    this.userService.deleteUserSpotifyAccess().subscribe({
      next: () => this.spotifyAccess = null
    });
  }
}
