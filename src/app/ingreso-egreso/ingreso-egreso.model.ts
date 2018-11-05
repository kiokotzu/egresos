import { Injectable } from '@angular/core';

import { ApplicationModel } from '../application.model';
import { Observable } from 'rxjs';
import { IngresoEgreso } from './ingreso-egreso';
import { SetItemsAction, TotalEgresosAction, TotalIngresosAction } from '../store/actions/ingreso-egreso.action';


@Injectable()
export class IngresoEgresoModel extends ApplicationModel {

  public ingresoEgresoItems$: Observable<IngresoEgreso[]> = this.store.select(store => store.models.ingresoEgreso.items);
  public totalIngresos$: Observable<number> = this.store.select( store => store.models.ingresoEgreso.totalIngresos);
  public totalEgresos$: Observable<number> = this.store.select( store => store.models.ingresoEgreso.totalEgresos);

  public fetchSetItems(items): void {
    this.store.dispatch(new SetItemsAction(items));
    this.store.dispatch(new TotalIngresosAction(items));
    this.store.dispatch(new TotalEgresosAction(items));
  }
}

