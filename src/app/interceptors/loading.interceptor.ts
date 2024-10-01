import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/shared/loading.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.showLoading(true);
  console.log('loading interceptor called.');
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