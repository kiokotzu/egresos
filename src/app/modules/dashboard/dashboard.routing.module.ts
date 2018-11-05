import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetailComponent } from '../ingreso-egreso/detail/detail.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../../core/services/auth-guard.service';


const dashboardRoutingModule: Routes = [
  {
    path: '', component: EstadisticaComponent
  },
  {
    path: 'ingreso-egreso', component: IngresoEgresoComponent
  },
  {
    path: 'detail', component: DetailComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutingModule
    //canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ ]
})

export class DashboardRoutingModule {}


