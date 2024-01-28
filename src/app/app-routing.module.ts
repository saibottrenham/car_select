import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { canActivateFirebaseAuth } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { MatSnackBar } from '@angular/material/snack-bar';


const routes: Routes = [
    { 
      path: 'login', 
      component: LoginComponent, 
      canActivate: [(route: ActivatedRouteSnapshot) => canActivateFirebaseAuth(route)] 
    },
    { 
      path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [(route: ActivatedRouteSnapshot) => canActivateFirebaseAuth(route)] 
    },
    { path: 'contact', component: ContactComponent }
    // { 
    //   path: 'signup', 
    //   component: SignupComponent, 
    //   canActivate: [(route: ActivatedRouteSnapshot) => canActivateFirebaseAuth(route)] 
    // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
