import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {PaymentMethod, PaymentsData} from "@core/data/payments";

@Injectable()
export class PaymentsService extends PaymentsData {

  private eventData: PaymentMethod[] = [{
    name: 'Paypal',
    url: 'https://www.paypal.com/paypalme/slimphone/10EUR',
    description: 'Clicca per pagare'
  },{
    name: 'Satispay',
    description: '',
    url: '',
  },{
    name: 'Hype',
    description: "Utilizza l'app per inviare la quota",
  },{
    name: 'Contanti',
    description: 'Paga direttamente all ingresso',
  }];

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return observableOf(this.eventData);
  }
}
