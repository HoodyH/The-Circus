import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentComponent} from "./payment.component";
import {PayComponent} from "@app/pages/event/payment/pay/pay.component";

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: '',
        component: PayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {
}
