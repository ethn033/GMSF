import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.apiUrl;
  controller = environment.endpoints.users.controller;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.controller}/${environment.endpoints.users.getAllUsers}`);
  }
}
