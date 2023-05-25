import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from './payment.component';
import {PaymentRoutingModule} from "@app/pages/payment/payment-routing.module";
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule {
}
