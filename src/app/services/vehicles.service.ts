import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  apiUrl = environment.apiUrl;
  controller = environment.endpoints.vehicles.controller;
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.controller}/${environment.endpoints.vehicles.getVehicles}`);
  }

  getVehicle(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.controller}/${environment.endpoints.vehicles.getVehicles}/${id}`);
  }

}
