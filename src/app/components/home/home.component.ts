import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SideBarComponent } from '../template/side-bar/side-bar.component';
import { LoadingService } from '../../services/shared/loading.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent, NavbarComponent, DashboardComponent, SideBarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private load : LoadingService) {

  }

  ngOnInit(): void {

  }
}
