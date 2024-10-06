import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  constructor() { }
  
  getLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }
  
  setLocalStorage(key: string, data: any) {
    localStorage.setItem(key, data);
  }
  
  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
  
}
