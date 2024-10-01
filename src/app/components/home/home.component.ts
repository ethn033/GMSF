import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SideBarComponent } from '../template/side-bar/side-bar.component';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent, ButtonModule, DialogModule, InputTextModule, SideBarComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
