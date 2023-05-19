import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {PaymentMethod, PaymentsData} from "@core/data/payments";

@Injectable()
export class PaymentsService extends PaymentsData {

  private eventData: PaymentMethod[] = [{
    name: 'Paypal',
    url: 'https://www.paypal.com/paypalme/slimphone/10EUR',
  },{
    name: 'Satispay',
    url: '',
  },{
    name: 'Hype',
  },{
    name: 'Contanti',
    description: "Preferibilmente già giusti",
  }];

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return observableOf(this.eventData);
  }
}
