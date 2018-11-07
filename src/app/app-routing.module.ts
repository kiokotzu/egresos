import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { LoginGuardService } from './core/services/login-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LoginGuardService ]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ LoginGuardService ]
  },
  {
    path: '',
    loadChildren: './modules/ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRountingModule { }
