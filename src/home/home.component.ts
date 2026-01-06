import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { PropertyServiceService } from '../app/services/property-service.service';
import { PropertiesComponent } from "../app/properties/properties.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PropertiesComponent],
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
  this.propertyService.setProperties(card);
  this.router.navigate(['/property', card.id]);
}



  
top_slides = [
    {
      id: 1,
      image:  '../assets/images/1.jfif',
      title: 'Mountain Trail',
      description: 'Explore the rocky paths with confidence and style.'
    },
    {
      id: 2,
      image: '../assets/images/24.jfif',
      title: 'Desert Drive',
      description: 'Navigate the dunes with powerful off-road vehicles.'
    },
    {
      id: 3,
      image: '../assets/images/29.jfif',
      title: 'Desert Drive',
      description: 'Navigate the dunes with powerful off-road vehicles.'
    },
    {
      id: 4,
      image: '../assets/images/9.jfif',
      title: 'Desert Drive',
      description: 'Navigate the dunes with powerful off-road vehicles.'
    },
    {
      id: 5,
      image: '../assets/images/6.jfif',
      title: 'Forest Route',
      description: 'Immerse yourself in nature with guided GPS trails.'
    },
    {
      id: 6,
      image: '../assets/images/22.jfif',
      title: 'Snow Expedition',
      description: 'Conquer icy terrains with advanced traction systems.'
    }
    ,
    {
      id: 7,
      image: '../assets/images/26.jfif',
      title: 'Snow Expedition',
      description: 'Conquer icy terrains with advanced traction systems.'
    }
  ];



}
