import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyServiceService } from '../services/property-service.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

 
constructor(private router: Router, private propertyService: PropertyServiceService) {}
  

properties = [
    {
      id: "pent-house",
      'image': [  '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif'

      ],
      title: 'Pent House',
      prices: '110,000',
      bed: '2',
      bath: '3',
      available: 1,
      love: 1,
      description: '2 Bedroom en-suite'
    },
    {
      id: "deluxe",
      'image': [  '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif'

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
      'image': [  '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif'

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
      'image': [  '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif'

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
      id: "one-bed",
      'image': [  '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif',
        '../assets/images/bedroom1.jfif'

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
