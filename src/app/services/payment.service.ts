import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InitializePaymentResponse {
  authorization_url: string;
  access_code: string;
  reference: string;
}

export interface VerifyPaymentResponse {
  status: 'success' | 'failed' | 'abandoned';
  reference: string;
  amount: number;
  paidAt: string;
  channel: string;
  customerEmail: string;
  metadata: any;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  initializePayment(payload: {
    email: string;
    amount: number;
    propertyId: string;
    propertyTitle: string;
    fullName: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    days: number;
    notes?: string;
  }): Observable<InitializePaymentResponse> {
    return this.http.post<InitializePaymentResponse>('/.netlify/functions/initialize-payment', payload);
  }

  verifyPayment(reference: string): Observable<VerifyPaymentResponse> {
    return this.http.get<VerifyPaymentResponse>('/.netlify/functions/verify-payment', {
      params: { reference },
    });
  }
}
