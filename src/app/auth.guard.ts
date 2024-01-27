// auth.guard.ts
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';

export function canActivateFirebaseAuth(route: ActivatedRouteSnapshot) {
  const afAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return afAuth.authState.pipe(
    take(1),
    map(user => {
      const isLoginPage = route.routeConfig?.path === 'login';
      const isSignUpPage = route.routeConfig?.path === 'signup';

      if (user && (isLoginPage || isSignUpPage)) {
        // User is logged in and trying to access the login or signup page, redirect to dashboard
        router.navigate(['/dashboard']);
        return false;
      } else if (!user && !isLoginPage && !isSignUpPage) {
        // User is not logged in and trying to access a protected route, redirect to login
        router.navigate(['/login']);
        return false;
      }

      // Allow access to the route
      return true;
    })
  );
}
