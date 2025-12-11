import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

import { PropertyServiceService } from '../services/property-service.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

 
constructor(private router: Router, private propertyService: PropertyServiceService) {}
  

 ngOnInit() {
    // Make the data available to the whole app
    this.propertyService.setProperties(this.properties);
  }

  goToDetail(property: any) {
    // Navigate using :id in the route
    this.router.navigate(['/property', property.id]);
  }

  
// // list.component.ts
// goToDetail(property: { id: string }) {
//   this.router.navigate(['/properties', property.id]);
// }



properties = [
    {
      id: "pent-house",
      'image': [  '../assets/images/3.png',
        '../assets/images/1.png',
        '../assets/images/6.png',
        '../assets/images/4.png',
        '../assets/images/5.png'

      ],
      title: 'Pent House',
      prices: '110,000',
      bed: '2',
      bath: '3',
      available: 1,
      love: 1,
      description: 'Pent floor: Private executive balcony, elaborate layout and Private laundry'
    },
    {
      id: "deluxe",
      'image': [  '../assets/images/14.png',
        '../assets/images/3.png',
        '../assets/images/9.png'

      ],
      title: 'Deluxe Plus',
      prices: '100,000',
      bed: '2',
      bath: '3',
      available: 1,
      love: 1,
      description: '2 Bedroom en-suite'
    },
    {
      id: "two-bed-ensuite",
      'image': [  '../assets/images/6.png',
        '../assets/images/3.png',
        '../assets/images/1.png'

      ],
      title: 'Deluxe',
      prices: '95,000',
      bed: '2',
      bath: '2',
      available: 1,
      love: 1,
      description: '2 Bedroom en-suite'
    },
    {
      id: "one-bed-ensuite",
      'image': [  '../assets/images/12.png',
        '../assets/images/1.png',
        '../assets/images/9.png'

      ],
      title: '1 Bed Apartment',
      prices: '75,000',
      bed: '1',
      bath: '1',
      available: 0,
      love: 1,
      description: '1 Bedroom en-suite'
    },
    {
      id: "studio",
      'image': [  '../assets/images/16.png',
        '../assets/images/7.png',
        '../assets/images/1.png'

      ],
      title: 'Studio Apartment',
      prices: '52,000',
      bed: '1',
      bath: '1',
      available: 1,
      love: 0,
      description: '1 Bedroom'
    }
  ];


  goToDetails(card: any) {
  this.propertyService.setProperties(card);
  this.router.navigate(['/property', card.id]);
}






}
