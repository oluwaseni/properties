import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  constructor() { }


  
private selectedProperty: any;

  setSelectedProperty(property: any) {
    this.selectedProperty = property;
  }

  getSelectedProperty() {
    return this.selectedProperty;
  }

}
