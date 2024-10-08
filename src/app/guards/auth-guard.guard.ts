import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  
  if(authService.isLoggedIn()) {
    return true;
  }
  
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};
