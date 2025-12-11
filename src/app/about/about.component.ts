import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

 brand = 'KTP Suites';

  // Breadcrumb
  breadcrumb = ['Lagos', 'Lekki'];

  // “In this section” links (left/right groups for layout)
  sectionLeft = [
    { label: 'Luxury Amenities', href: '#history' },
    { label: ' Free Airport Pickup', href: '#careers' },
    { label: 'Special Offers', href: '#newsletter' },
    { label: 'Online Payment', href: '#awards' },
    { label: ' Best Location', href: '#team' },
  ];

  sectionRight = [
    { label: 'Friendly Staff', href: '#concierge' },
    { label: 'Swimming poo', href: '#holiday' },
    { label: 'Free Wifi', href: '#gm-message' },
    { label: 'Gym', href: '#sustainability' },
    { label: 'Laundry', href: '#story' },
  ];

  // Promo tiles
  promos = [
    {
      title: 'Holiday with confidence',
      subtitle: 'with KTP Suites',
      image: '../assets/images/3.png',
      href: '/properties'
    },
    {
      title: 'Secured Environment',
      subtitle: 'Luxury Apartmens',
      image: '../assets/images/4.png',
      href: '/properties'
    }
  ];

  // Hero banner image
  heroImage = '../assets/images/16.png';
}
