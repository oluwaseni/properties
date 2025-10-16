import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbannerComponent } from "../topbanner/topbanner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'propertyrent-app';
}
