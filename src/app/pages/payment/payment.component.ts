import { Component, OnInit } from '@angular/core';
import {Event, EventsData} from "@core/data/events";
import {PaymentMethod, PaymentsData} from "@core/data/payments";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  event: Event;
  paymentMethods: PaymentMethod[] = []


  constructor(private eventService: EventsData, private paymentService: PaymentsData) {
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((event) => {
      this.event = event
    })

    this.paymentService.getPaymentMethods().subscribe((paymentMethods) => {
      this.paymentMethods = paymentMethods
    })
  }

}
