import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbanner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topbanner.component.html',
  styleUrl: './topbanner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbannerComponent {

}
