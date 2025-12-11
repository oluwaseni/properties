
// property-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// export interface Property {
//   id: string;
//   title: string;
//   price: number;
//   // add other fields...
// }

@Injectable({ providedIn: 'root' })
export class PropertyServiceService {
  // Holds the full list (in-memory), hydrated from list component or assets.
  private properties$ = new BehaviorSubject<any[]>([]);

  // Initialize or update the list (call from list component)
  setProperties(properties: any[]) {
    this.properties$.next(properties);
    // Optional: persist to localStorage for refresh resilience
    localStorage.setItem('properties', JSON.stringify(properties));
  }

  // Read the observable list
  getProperties$() {
    return this.properties$.asObservable();
  }

  // Get a single any by ID (first tries memory, then localStorage)
  getById(id: string): any | null {
    const mem = this.properties$.value;
    if (mem && mem.length) {
      return mem.find(p => p.id === id) ?? null;
    }
    // fallback: hydrate from localStorage on refresh
    const raw = localStorage.getItem('properties');
    if (raw) {
      const list = JSON.parse(raw) as any[];
      // also put back into memory to keep app consistent
      this.properties$.next(list);
      return list.find(p => p.id === id) ?? null;
    }
    return null;
  }
}
