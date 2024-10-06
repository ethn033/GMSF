import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { Response } from '../../../models/response';
import { UtilsService } from '../../../services/shared/utils.service';
import { environment } from '../../../../environments/environment';
import { ToastService } from '../../../service/toast.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ButtonModule, InputTextModule, ToastModule],
  providers: [ToastService, MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private toast: ToastService,private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private utils: UtilsService) {
      this.loginForm = this.formBuilder.group({
        UserName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
        Password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
      });

      if(this.authService.isLoggedIn()) {
        this.router.navigate(['/home'], {replaceUrl: true});
      }
    }
    
    response: Response;
    onLogin() {
      if(this.loginForm.invalid) {
        return;
      }
      
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (res) => {
          this.response = res as Response;
          if(this.response.statusCode === 200 && this.response.data) {
            this.utils.setLocalStorage(environment.keys.token, this.response.data);
            this.router.navigate(['/home'], {replaceUrl: true});
            return;
          }
          this.toast.showError(this.response.message);
        },
        error: (error) => {
          if(error instanceof HttpErrorResponse) {
            this.toast.showError(error.error);
            return;
          }
          this.toast.showError('Some error occurred while processing your request.');
        },
      });
    }
  }
  