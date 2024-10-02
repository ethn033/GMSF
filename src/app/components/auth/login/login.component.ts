import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Login } from '../../../models/login';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(
    private authService: AuthService, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        UserName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
        Password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
      });
    }
    
    onLogin() {
      if(this.loginForm.invalid) {
        return;
      }
      
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (res) => {
          debugger;
        },
        error: (error) => {
          console.error('Login error:', error);
        },
      });
    }
  }
  