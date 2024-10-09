import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  constructor(private usersService: UsersService) {
    
  }
  
  first: number = 0;
  rows: number = 10;
  usersList: any[] = [];
  totalRecords: number = 0;
  
  ngOnInit() {
    this.usersService.getUsers().subscribe({
      next: (res) => {
        this.usersList = res;
        this.totalRecords = this.usersList.length;
      }
    });
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
    return this.usersList ? this.first === this.usersList.length - this.rows : true;
  }
  
  isFirstPage(): boolean {
    return this.usersList ? this.first === 0 : true;
  }
  
}
