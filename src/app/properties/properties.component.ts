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
  

properties = [
    {
      id: "pent-house",
      'image': [  '../properties/assets/images/3.png',
        '../properties/assets/images/1.png',
        '../properties/assets/images/6.png',
        '../properties/assets/images/4.png',
        '../properties/assets/images/5.png'

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
      'image': [  '../properties/assets/images/3.png',
        '../properties/assets/images/9.png',
        '../properties/assets/images/14.png'

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
      'image': [  '../properties/assets/images/3.png',
        '../properties/assets/images/1.png',
        '../properties/assets/images/6.png'

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
      'image': [  '../properties/assets/images/12.png',
        '../properties/assets/images/1.png',
        '../properties/assets/images/9.png'

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
      'image': [  '../properties/assets/images/7.png',
        '../properties/assets/images/16.png',
        '../properties/assets/images/1.png'

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
  this.propertyService.setSelectedProperty(card);
  this.router.navigate(['/property', card.id]);
}




}
