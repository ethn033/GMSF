import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { LoadingService } from './services/shared/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean = false;

  constructor(public utils: LoadingService) {}
  
  ngOnInit() {
    const sub = this.utils.loading.subscribe({
      next: (loading: boolean) => {
        this.loading = loading;
      }
    });
    this.subs.push(sub);
  }

  subs: Subscription[] = [];
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
