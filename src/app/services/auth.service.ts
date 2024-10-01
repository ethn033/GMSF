import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Login } from '../models/login';
import { UtilsService } from './shared/utils.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  tokenKey = environment.keys.token;
  apiUrl = environment.apiUrl;
  controller = 'Auth';
  endPoint = 'Login';
  constructor(private http: HttpClient, private utils: UtilsService) { }
  
  loginUser(dto: Login) : Observable<any> {
    return this.http.post(`${this.apiUrl}${this.controller}/${this.endPoint}`, dto).pipe(
      tap((response : any) => {
        debugger
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }
  
  logoutUser(dto: Login) {
    this.utils.removeLocalStorage(this.tokenKey);
  } 
  
  isLoggedIn(): boolean {
    const token = this.utils.getLocalStorage(this.tokenKey);
    if(!token) {
      return false;
    }
    
    try {
      const decoded: any = jwtDecode(token);
      const expirationDate = decoded.exp * 1000;
      return expirationDate > Date.now();
    } 
    catch (e) {
      console.error('Token decoding failed:', e);
      return false;
    }
  }
}
