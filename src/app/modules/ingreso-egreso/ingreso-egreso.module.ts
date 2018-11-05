import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetailComponent } from './detail/detail.component';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoPipe } from '../../core/pipes/ingreso-egreso.pipe';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetailComponent,
    IngresoEgresoPipe
  ],
  providers: [
    IngresoEgresoModel
  ]
})
export class IngresoEgresoModule { }
