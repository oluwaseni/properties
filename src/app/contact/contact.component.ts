import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

type ContactCard = {
  icon: string;     // Font Awesome class
  title: string;
  body: string;
  ctaText: string;
  href: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class ContactComponent {

brand = 'KTP Suites';

  hero = {
    title: 'Address',
    subtitle: `Road 3, house 19, Ikota villa behind mega chicken.`,
    image: '../../assets/images/customer.png'
  };

  // Cards under the hero (adjust to your needs)
  cards: ContactCard[] = [
    {
      icon: 'fas fa-user-check',
      title: 'Existing customers',
      body: 'Need help with a booking or your stay? Our support team can assist quickly.',
      ctaText: 'Call support',
      href: 'tel:+2348081678368'
    },
    {
      icon: 'fas fa-piggy-bank',
      title: 'New apartment enquiries',
      body: 'Looking for short-let options in Lekki or Ikota? Get recommendations instantly.',
      ctaText: 'WhatsApp us',
      href: 'https://wa.me/2348081678368'
    },
    {
      icon: 'fas fa-envelope-open-text',
      title: 'General questions',
      body: 'Ask about availability, pricing, amenities, or corporate stays.',
      ctaText: 'Email support',
      href: 'mailto:ktpsuites@gmail.com.com'
    }
  ];

  // Quick contact strip
  quick = {
    phone: '2348081678368',
    mail: 'ktpsuites@gmail.com.com'
  };
}
