import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  subscriptions: Subscription[] = [];
  constructor() { }
  
  addSub(subscription: Subscription) {
    if(subscription) {
      this.subscriptions.push(subscription);
    }
  }
  
  destroyAllSub() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  
}
