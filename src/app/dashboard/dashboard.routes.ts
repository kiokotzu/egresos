import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetailComponent } from '../ingreso-egreso/detail/detail.component';

export const dashboardRoutes: Routes = [
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
