import {Observable} from "rxjs";

export interface PaymentMethod {
  id?: number;
  name: string;
  description?: string;
  url?: string;
}


export abstract class PaymentsData {
  abstract getPaymentMethods(): Observable<PaymentMethod[]>;
}
