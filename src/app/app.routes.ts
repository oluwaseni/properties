import { Routes } from '@angular/router';


export const routes: Routes = [
  { 

    path: 'home',
    loadComponent: () =>
      import('../home/home.component').then((m) => m.HomeComponent),
  },
    { 

    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
    { 

    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  { 
    path: 'pictures',
    loadComponent: () =>
      import('./pictures/pictures.component').then((m) => m.PicturesComponent),
  },
   { 

    path: 'properties',
    loadComponent: () =>
      import('./properties/properties.component').then((m) => m.PropertiesComponent),
  },
  {
    path: 'property/:id',
    loadComponent: () =>
      import('../gallery/gallery.component').then((m) => m.GalleryComponent),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
