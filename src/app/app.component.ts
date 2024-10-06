import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { LoadingService } from './services/shared/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  loading: boolean = false;
 
  constructor(public utils: LoadingService) {
    this.utils.loading.subscribe({
      next: (loading: boolean) => {
        this.loading = loading;
      }
    });
  }
  
  ngOnInit() {
  }
}
