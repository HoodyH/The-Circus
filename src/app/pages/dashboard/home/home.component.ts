import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsData, Event, Participant } from '@app/@core/data/events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: Event;
  participants: Participant[] = [];

  eventForm: FormGroup;

  constructor(private eventService: EventsData, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.eventForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      tagline: ['', Validators.required],
      description: ['', Validators.required],
      start_datetime: ['', Validators.required],
      end_datetime: ['', Validators.required],
      backup_datetime: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.eventService.getEvent(this.eventService.eventCode).subscribe({
      next: (event) => {
        this.event = event;
        this.eventForm.patchValue({...this.event})
      }
    })

    this.eventService.getParticipants(this.eventService.eventCode).subscribe({
      next: (participants) => {
        this.participants = participants;
      }
    })
  }

  submitForm(): void {
    if (this.eventForm.valid) {
      // Perform saving logic
      console.log(this.eventForm.value);
    }
  }

}
