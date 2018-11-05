import { combineReducers } from '@ngrx/store';

import { ingresoEgresoReducer as items } from './ingresos-egresos/ingreso-egreso.reducer';
import { totalIngresosReducer as totalIngresos } from './ingresos-egresos/total-ingresos.reducer';
import { totalEgresosReducer as totalEgresos } from './ingresos-egresos/total-egresos.reducer';


const ingresoEgreso = combineReducers({
  items,
  totalIngresos,
  totalEgresos
});

export const models = combineReducers({
  ingresoEgreso
});
