import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  
  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe({
      next: (res) => {
        this.usersList = res;
        this.totalRecords = this.usersList.length;
      }
    });
  }
  
  first: number = 0;
  rows: number = 10;
  usersList: any[] = [];
  totalRecords: number = 0;
  
  ngOnInit(): void {
    
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
