import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor() { }
    private progress = new BehaviorSubject<boolean>(false);
    loading = this.progress.asObservable();

    showLoading(loading: boolean) : void {
      setTimeout(() => {
        this.progress.next(loading);
      });
    }
}
