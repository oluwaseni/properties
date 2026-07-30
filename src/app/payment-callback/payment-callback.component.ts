import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe, isPlatformBrowser } from '@angular/common';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-callback',
  standalone: true,
  imports: [RouterLink, DatePipe, DecimalPipe],
  templateUrl: './payment-callback.component.html',
  styleUrl: './payment-callback.component.css',
})
export class PaymentCallbackComponent {
  status: 'checking' | 'success' | 'failed' = 'checking';
  errorMessage = '';
  reference = '';
  amount = 0;
  paidAt = '';
  channel = '';
  customerEmail = '';
  propertyTitle = '';
  guestName = '';
  days = 0;
  checkIn = '';
  checkOut = '';

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      // Defer verification to the browser: the server can't resolve the
      // relative function URL against a real origin, and pre-rendering a
      // status here would force a hydration mismatch between the SSR and
      // client-rendered outcome.
      return;
    }

    const reference = this.route.snapshot.queryParamMap.get('reference') || this.route.snapshot.queryParamMap.get('trxref');
    if (!reference) {
      this.status = 'failed';
      this.errorMessage = 'No payment reference was provided.';
      return;
    }

    this.reference = reference;
    this.paymentService.verifyPayment(reference).subscribe({
      next: (res) => {
        this.status = res.status === 'success' ? 'success' : 'failed';
        this.amount = res.amount;
        this.paidAt = res.paidAt;
        this.channel = res.channel;
        this.customerEmail = res.customerEmail;
        this.propertyTitle = res.metadata?.propertyTitle || '';
        this.guestName = res.metadata?.fullName || '';
        this.days = Number(res.metadata?.days) || 0;
        this.checkIn = res.metadata?.checkIn || '';
        this.checkOut = res.metadata?.checkOut || '';
      },
      error: (err) => {
        this.status = 'failed';
        this.errorMessage = err?.error?.error || 'Could not verify your payment.';
      },
    });
  }

  print() {
    window.print();
  }
}
