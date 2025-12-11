import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PropertyServiceService } from '../app/services/property-service.service';

// item-detail.component.ts
import { ActivatedRoute } from '@angular/router';

import { switchMap, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {


  
 constructor(private propertyService : PropertyServiceService, private route:ActivatedRoute) {}

 property: any;
 notFound = false;

  

  ngOnInit() {
    
const id = this.route.snapshot.paramMap.get('id')!;
    const item = this.propertyService.getById(id);
    if (item) {
      this.property = item;
    } else {
      this.notFound = true; // show “not found” or navigate away
    }
  }



// ngOnInit(): void {
//     this.property = this.propertyService.getSelectedProperty();

//     console.log(this.property)
//   }
  





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

  
 contacts = [
    { number: '+234 808 167 8368', hidden: true },
    { number: '+234 803 335 3235', hidden: true },
    { number: '+234 803 329 4037', hidden: true }
  ];

  revealNumbers(): void {
    this.contacts = this.contacts.map(c => ({ ...c, hidden: false }));
  }

}