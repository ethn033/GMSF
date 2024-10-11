import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicle } from '../../models/vehicle';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../services/toast.service';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, FieldsetModule, DialogModule],
  templateUrl: './vehicles.component.html',
  providers: [ToastService, MessageService],
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  constructor(private vehiclesService: VehiclesService, private toast: ToastService) {
    
  }
  
  visibleModel: boolean = false;
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 0;
  
  vehiclesList: Vehicle[] = [];
  ngOnInit() {
    const sub = this.vehiclesService.getVehicles().subscribe({
      next: (res) => {
        this.vehiclesList = res.data as Vehicle[];
        this.totalRecords = this.vehiclesList.length;
      },
      error: (error) => {
        this.handleError(error);
        this.vehiclesList = [];
        this.totalRecords = 0;
      }
    });

    this.subs.push(sub);
  }
  
  next() {
    this.first = this.first + this.rows;
  }
  
  prev() {
    this.first = this.first - this.rows;
  }
  
  reset() {
    this.first = 0;
  }
  
  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  
  isLastPage(): boolean {
    return this.vehiclesList ? this.first === this.vehiclesList.length - this.rows : true;
  }
  
  isFirstPage(): boolean {
    return this.vehiclesList ? this.first === 0 : true;
  }
  

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${error.error.message}`;
    } 
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.toast.showError(errorMessage);
  }

  subs: Subscription[] = [];
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
