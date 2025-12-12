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
    { src: '../assets/pictures/1.jfif', alt: 'Gym', accent: '#d3c7c0' },
    { src: '../assets/pictures/13.jfif',       alt: 'Lounge',                  accent: '#f0b90b' },
    { src: '../assets/pictures/3.jfif', alt: 'Bar',                 accent: '#d6d9dc' },
    { src: '../assets/pictures/11.jfif',  alt: 'Solar-powered',                   accent: '#6fb1d8' },
    { src: '../assets/pictures/5.jfif',   alt: 'Swimming Pool',                    accent: '#8bb48c' },
    { src: '../assets/pictures/6.jfif',      alt: 'Dinning',                       accent: '#1e2c2b' },
    { src: '../assets/pictures/7.jfif',   alt: 'Gaming',                    accent: '#a6492e' },
    { src: '../assets/pictures/8.jfif',  alt: 'Pool',                   accent: '#59a260' },
    { src: '../assets/pictures/4.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/pictures/14.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/pictures/15.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/pictures/16.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/pictures/11.jfif',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/5.png',  alt: 'Washing Machine',                   accent: '#070d41ff' },
    { src: '../assets/images/6.png',  alt: 'Washing Machine',                   accent: '#070d41ff' },
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



