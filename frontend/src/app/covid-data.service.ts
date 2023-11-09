// frontend/src/app/covid-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  private apiUrl = 'http://localhost:5000/api'; // Your Flask backend API

  constructor(private http: HttpClient) { }

  getGlobalData() {
    return this.http.get(`${this.apiUrl}/global`);
  }

  getCountryData(country: string) {
    return this.http.get(`${this.apiUrl}/country/${country}`);
  }

  // Other service methods...
}
