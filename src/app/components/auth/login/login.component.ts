import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Login } from '../../../models/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dto: Login = new Login();
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {

  }

  onLogin() {
    this.authService.loginUser(this.dto).subscribe({
      next: () => {
        // Handle successful login (redirect or show success message)
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
  });
  }

}
