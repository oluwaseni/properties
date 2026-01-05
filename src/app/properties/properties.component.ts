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
      'image': [  '../assets/images/28.jfif',
        '../assets/images/29.jfif',
        '../assets/images/30.jfif',
        '../assets/images/31.jfif',
        '../assets/images/32.jfif'

      ],
      title: 'Pent House',
      prices: '110,000',
      bed: '2',
      bath: '3',
      available: 1,
      love: 1,
      description: 'Pent floor: Private executive balcony, elaborate layout and Private laundry'
    },
    // {
    //   id: "deluxe",
    //   'image': [  '../assets/images/14.jfif',
    //     '../assets/images/3.jfif',
    //     '../assets/images/9.jfif'

    //   ],
    //   title: 'Deluxe Plus',
    //   prices: '100,000',
    //   bed: '2',
    //   bath: '3',
    //   available: 1,
    //   love: 1,
    //   description: '2 Bedroom en-suite'
    // },
    {
      id: "two-bed-ensuite",
      'image': [  '../assets/images/21.jfif',
        '../assets/images/22.jfif',
        '../assets/images/19.jfif',
        '../assets/images/23.jfif'

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
      'image': [  '../assets/images/12.jfif',
        '../assets/images/33.jfif',
        '../assets/images/12.jfif'

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
      'image': [  '../assets/images/13.jfif',
        '../assets/images/14.jfif',
        '../assets/images/15.jfif'

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
