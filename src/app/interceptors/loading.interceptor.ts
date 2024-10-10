import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/shared/loading.service';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/shared/utils.service';
import { environment } from '../../environments/environment';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  const authService = inject(AuthService);
  const utils = inject(UtilsService);

  if(authService.isLoggedIn()) {
    const tokenKey = environment.keys.token;
    const token = utils.getLocalStorage(tokenKey);
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }
  }
  
  loadingService.showLoading(true);
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {

        }
      },
      error: () => {
        loadingService.showLoading(false);
      },
    }),
    finalize(() => {
      loadingService.showLoading(false);
    })
  );
};