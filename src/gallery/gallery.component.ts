import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { PropertyServiceService } from '../app/services/property-service.service';
import { PaymentService } from '../app/services/payment.service';

// item-detail.component.ts
import { ActivatedRoute } from '@angular/router';

// import { switchMap, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {



 constructor(
   private propertyService: PropertyServiceService,
   private route: ActivatedRoute,
   private paymentService: PaymentService
 ) {}

 property: any;
 notFound = false;

 showBookingModal = false;
 payingNow = false;
 paymentError = '';

 fullName = '';
 customerEmail = '';
 phone = '';
 checkIn = '';
 checkOut = '';
 notes = '';

 get pricePerNight(): number {
   return Number(String(this.property?.prices ?? '').replace(/,/g, '')) || 0;
 }

 get minCheckIn(): string {
   return this.toIsoDate(new Date());
 }

 get minCheckOut(): string {
   if (!this.checkIn) {
     return this.minCheckIn;
   }
   const day = new Date(this.checkIn);
   day.setDate(day.getDate() + 1);
   return this.toIsoDate(day);
 }

 get days(): number {
   if (!this.checkIn || !this.checkOut) {
     return 0;
   }
   const start = new Date(this.checkIn).getTime();
   const end = new Date(this.checkOut).getTime();
   const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
   return diff > 0 ? diff : 0;
 }

 get totalAmount(): number {
   return this.pricePerNight * this.days;
 }

 private toIsoDate(date: Date): string {
   return date.toISOString().slice(0, 10);
 }

 openBookingModal() {
   this.paymentError = '';
   if (!this.checkIn) {
     this.checkIn = this.minCheckIn;
   }
   if (!this.checkOut) {
     this.checkOut = this.minCheckOut;
   }
   this.showBookingModal = true;
 }

 closeBookingModal() {
   if (this.payingNow) {
     return;
   }
   this.showBookingModal = false;
 }

 submitBooking() {
   this.paymentError = '';

   if (!this.fullName.trim()) {
     this.paymentError = 'Please enter your full name.';
     return;
   }

   if (!/^\S+@\S+\.\S+$/.test(this.customerEmail)) {
     this.paymentError = 'Please enter a valid email address.';
     return;
   }

   if (!this.phone.trim()) {
     this.paymentError = 'Please enter your phone number.';
     return;
   }

   if (!this.checkIn || !this.checkOut) {
     this.paymentError = 'Please select a check-in and check-out date.';
     return;
   }

   if (this.days < 1) {
     this.paymentError = 'Check-out date must be after the check-in date.';
     return;
   }

   if (this.totalAmount <= 0) {
     this.paymentError = 'This property does not have a valid price set.';
     return;
   }

   this.payingNow = true;
   this.paymentService
     .initializePayment({
       email: this.customerEmail,
       amount: this.totalAmount,
       propertyId: this.property.id,
       propertyTitle: this.property.title,
       fullName: this.fullName,
       phone: this.phone,
       checkIn: this.checkIn,
       checkOut: this.checkOut,
       days: this.days,
       notes: this.notes,
     })
     .subscribe({
       next: (res) => {
         window.location.href = res.authorization_url;
       },
       error: (err) => {
         this.payingNow = false;
         this.paymentError = err?.error?.error || 'Could not start payment. Please try again.';
       },
     });
 }



  ngOnInit() {

const id = this.route.snapshot.paramMap.get('id')!;
    const item = this.propertyService.getById(id);
    if (item) {
      this.property = item;
    } else {
      this.notFound = true; // show “not found” or navigate away
    }
  }



// ngOnInit(): void {
//     this.property = this.propertyService.getSelectedProperty();

//     console.log(this.property)
//   }






  cards = [
    {
      id: 1,
      image: '/assets/images/bedroom1.jfif',
      title: 'Mountain Trail',
      description: 'Explore the rocky paths with confidence and style.'
    },
    {
      id: 2,
      image: '/assets/images/bedroom1.jfif',
      title: 'Desert Drive',
      description: 'Navigate the dunes with powerful off-road vehicles.'
    },
    {
      id: 3,
      image: '/assets/images/bedroom1.jfif',
      title: 'Forest Route',
      description: 'Immerse yourself in nature with guided GPS trails.'
    },
    {
      id: 4,
      image: '/assets/images/bedroom1.jfif',
      title: 'Snow Expedition',
      description: 'Conquer icy terrains with advanced traction systems.'
    }
  ];


 contacts = [
    { number: '+234 808 167 8368', hidden: true },
    { number: '+234 803 335 3235', hidden: true },
    { number: '+234 803 329 4037', hidden: true }
  ];

  revealNumbers(): void {
    this.contacts = this.contacts.map(c => ({ ...c, hidden: false }));
  }

}
