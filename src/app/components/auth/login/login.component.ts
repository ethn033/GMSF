import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { ToastService } from '../../../services/toast.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ButtonModule, InputTextModule, ToastModule],
  providers: [ToastService, MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  constructor(private toast: ToastService, private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private utils: UtilsService) {
    this.loginForm = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      Password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
    });
  }
  
  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard'], {replaceUrl: true});
    }
  }
  
  response: Response;
  onLogin() {
    if(this.loginForm.invalid) {
      return;
    }
    
    const sub = this.authService.loginUser(this.loginForm.value).subscribe({
      next: (res) => {
        this.response = res as Response;
        if(this.response.statusCode === 200 && this.response.data && this.response.data.token) {
          this.utils.setLocalStorage(environment.keys.token, this.response.data.token);
          this.utils.setLocalStorage(environment.keys.userProfile, JSON.stringify(this.response.data.applicationUser));
          this.router.navigate(['/dashboard'], {replaceUrl: true});
          this.toast.showSuccess('Loggedin successfully.');
          return;
        }
        this.toast.showError(this.response.message);
      },
      error: (error) => {
        debugger
        if(error instanceof HttpErrorResponse) {
          this.toast.showError(error.error);
          return;
        }
        this.toast.showError('Some error occurred while processing your request.');
      },
    });
    this.subs.push(sub);
  }
  
  subs: Subscription[] = [];
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  
}
