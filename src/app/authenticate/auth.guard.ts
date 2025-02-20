import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = authService.getRole();
  if (role) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
