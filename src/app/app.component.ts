import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProgressBarComponent } from './components/shared/progress-bar/progress-bar.component';
import { LoadingService } from './services/shared/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  loading: boolean = false;
 
  constructor(private primengConfig: PrimeNGConfig, public utils: LoadingService) {
    this.utils.loading.subscribe({
      next: (loading: boolean) => {
        this.loading = loading;
      }
    });
  }
  
  ngOnInit() {
  }
}
