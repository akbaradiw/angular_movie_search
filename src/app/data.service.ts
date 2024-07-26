import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch("https://fakestoreapi.com/products"
      );
      if (!response.ok) {
        throw new Error('well done' + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }
}
