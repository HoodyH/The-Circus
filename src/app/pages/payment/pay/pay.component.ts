import { Component, OnInit } from '@angular/core';
import {Event, EventsData} from "@core/data/events";
import {PaymentMethod, PaymentsData} from "@core/data/payments";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  event: Event;
  paymentMethods: PaymentMethod[] = []


  constructor(private eventService: EventsData, private paymentService: PaymentsData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent(this.eventService.eventId).subscribe({
      next: (event) => {
        this.event = event
      }
    })

    this.paymentService.getPaymentMethods().subscribe((paymentMethods) => {
      this.paymentMethods = paymentMethods
    })
  }

}
