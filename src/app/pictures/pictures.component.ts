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
    { src: '../assets/pictures/1.jfif', alt: 'Butterfly on orange flower', accent: '#d3c7c0' },
    { src: '../assets/pictures/2.jfif',       alt: 'Black dog',                  accent: '#f0b90b' },
    { src: '../assets/pictures/3.jfif', alt: 'Polar bear',                 accent: '#d6d9dc' },
    { src: '../assets/pictures/4.jfif',  alt: 'Flamingo',                   accent: '#6fb1d8' },
    { src: '../assets/pictures/5.jfif',   alt: 'Leopard',                    accent: '#8bb48c' },
    { src: '../assets/pictures/6.jfif',      alt: 'Deer',                       accent: '#1e2c2b' },
    { src: '../assets/pictures/7.jfif',   alt: 'Rooster',                    accent: '#a6492e' },
    { src: '../assets/pictures/8.jfif',  alt: 'Squirrel',                   accent: '#59a260' },
  ];

  // For @for's track clause — must be invoked: track trackByIndex($index, item)
  trackByIndex(index: number, _item: GalleryItem): number {
    return index;
  }


}



