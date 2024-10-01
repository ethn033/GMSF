import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent, NavbarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit(): void {
    
  }
}
