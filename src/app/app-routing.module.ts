import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { canActivateFirebaseAuth } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { VehicleComponent } from './vehicle/vehicle.component'; // Import VehicleComponent

const routes: Routes = [
    { 
      path: '', 
      component: VehicleComponent // Home path shows VehicleComponent
    },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
