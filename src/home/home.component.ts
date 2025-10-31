import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { PropertyServiceService } from '../app/services/property-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

 
constructor(private router: Router, private propertyService: PropertyServiceService) {}
swiperEffect = 'cards'; // default effect
isHidden = true;

  ngOnInit() {

        
this.setSwiperEffect();
    window.addEventListener('resize', () => this.setSwiperEffect());

    const btnText = document.getElementById("myBtn") as HTMLButtonElement;
    if (btnText) {
      btnText.innerHTML = this.isHidden ? "Read more" : "Read less";
    }


  }

  
setSwiperEffect() {
    const width = window.innerWidth;
    if (width <= 576) {
      this.swiperEffect = 'slide'; // simpler effect for mobile
    } else if (width <= 768) {
      this.swiperEffect = 'fade';
    } else {
      this.swiperEffect = 'cards'; // desktop effect
    }
  }


  toggleReadMore(): void {
  const dots = document.getElementById("dots") as HTMLElement;
  const moreText = document.getElementById("more") as HTMLElement;
  const btnText = document.getElementById("myBtn") as HTMLButtonElement;

  if (dots && moreText && btnText) {
    const isHidden = dots.style.display === "none";

    dots.style.display = isHidden ? "inline" : "none";
    moreText.style.display = isHidden ? "none" : "inline";
    btnText.innerHTML = isHidden ? "Read more" : "Read less";
  }
}


goToDetails(card: any) {
  this.propertyService.setSelectedProperty(card);
  this.router.navigate(['/property', card.id]);
}



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


  
top_slides = [
    {
      id: 1,
      image:  '../assets/images/bedroom1.jfif',
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
