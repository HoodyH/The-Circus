import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsData, Event, Participant, Activity } from '@app/@core/data/events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  event: Event;
  participants: Participant[] = [];

  eventForm: FormGroup;
  locationForm: FormGroup;
  activitiesForm: FormGroup;

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

    this.locationForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
    });

    this.activitiesForm = this.fb.group({
      activities: this.fb.array([])
    });

    this.eventService.getEvent(this.eventService.eventCode).subscribe({
      next: (event) => {
        this.event = event;
        this.eventForm.patchValue({...this.event})
        this.locationForm.patchValue({...this.event.location})
        this.event.activities.forEach((value) => {
          this.addActivity(value);
        })
      }
    })

    this.eventService.getParticipants(this.eventService.eventCode).subscribe({
      next: (participants) => {
        this.participants = participants;
      }
    })
  }

  get activityControls() {
    return (this.activitiesForm.get('activities') as FormArray).controls;
  }

  addActivity(data: Activity | null = null): void {
    const activityFormGroup = this.fb.group({
      id: [-1],
      title: ['', Validators.required],
      start_datetime: ['', Validators.required],
      description: ['', Validators.required],
      live_description: [''],
      actions: this.fb.array([]),
      live_configuration: this.fb.group({
        // Define the fields for live configuration
      })
    });

    if (data) {
      activityFormGroup.patchValue({...data})
    }

    (this.activitiesForm.get('activities') as FormArray).push(activityFormGroup);
  }

  removeActivity(index: number): void {
    (this.activitiesForm.get('activities') as FormArray).removeAt(index);
  }

  submitEventForm(): void {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
    }
  }

  submitLocationForm(): void {
    if (this.locationForm.valid) {
      console.log(this.locationForm.value);
    }
  }

  submitActivitiesForm(): void {
    if (this.activitiesForm.valid) {
      const activities = this.activitiesForm.value.activities;
      console.log(activities);
    }
  }

}
