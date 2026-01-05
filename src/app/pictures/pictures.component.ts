import { Component } from '@angular/core';



interface GalleryItem {
  src: string;
  alt: string;
  // Optional accent color per image block (matches mock’s colored tiles)
  accent?: string;
}

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {


  
  items: GalleryItem[] = [
    { src: '../assets/images/1.jfif', alt: 'Gym', accent: '#d3c7c0' },
    { src: '../assets/images/2.jfif',       alt: 'Lounge',                  accent: '#f0b90b' },
    { src: '../assets/images/3.jfif', alt: 'Bar',                 accent: '#d6d9dc' },
    { src: '../assets/images/4.jfif',  alt: 'Solar-powered',                   accent: '#6fb1d8' },
    { src: '../assets/images/5.jfif',   alt: 'Swimming Pool',                    accent: '#8bb48c' },
    { src: '../assets/images/6.jfif',      alt: 'Dinning',                       accent: '#1e2c2b' },
    { src: '../assets/images/7.jfif',   alt: 'Gaming',                    accent: '#a6492e' },
    { src: '../assets/images/8.jfif',  alt: 'Pool',                   accent: '#59a260' },
    { src: '../assets/images/9.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/14.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/15.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/16.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/32.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/17.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/18.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/32.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/24.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/25.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' }
    // { src: '../assets/images/5.png',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    // { src: '../assets/images/6.png',  alt: 'Washing Machine',                   accent: '#070d41ff' },
  ];

  // For @for's track clause — must be invoked: track trackByIndex($index, item)
  trackByIndex(index: number, _item: GalleryItem): number {
    return index;
  }

  
 /** How many tiles should appear to the RIGHT of the hero in the first row. */
  rightCount = 3;

  /** Derived arrays for layout (keeps template simple). */
  get rightItems(): GalleryItem[] {
    return this.items.slice(0, this.rightCount);
  }
  get belowItems(): GalleryItem[] {
    return this.items.slice(this.rightCount);
  }



}



