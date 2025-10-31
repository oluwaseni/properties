import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PropertyServiceService } from '../app/services/property-service.service';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {


  
 constructor(private propertyService: PropertyServiceService) {}

 property: any;

  ngOnInit(): void {
    this.property = this.propertyService.getSelectedProperty();

    console.log(this.property)
  }



  cards = [
    {
      id: 1,
      image: '../assets/images/bedroom1.jfif',
      title: 'Mountain Trail',
      description: 'Explore the rocky paths with confidence and style.'
    },
    {
      id: 2,
      image: '../assets/images/bedroom1.jfif',
      title: 'Desert Drive',
      description: 'Navigate the dunes with powerful off-road vehicles.'
    },
    {
      id: 3,
      image: '../assets/images/bedroom1.jfif',
      title: 'Forest Route',
      description: 'Immerse yourself in nature with guided GPS trails.'
    },
    {
      id: 4,
      image: '../assets/images/bedroom1.jfif',
      title: 'Snow Expedition',
      description: 'Conquer icy terrains with advanced traction systems.'
    }
  ];
}