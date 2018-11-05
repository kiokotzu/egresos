import { Action } from '@ngrx/store';
import { IngresoEgreso } from '../../../modules/ingreso-egreso/ingreso-egreso';

export const SET_ITEMS = 'SET_ITEMS';
export const UNSET_ITEMS = 'UNSET_ITEMS';
export const TOTAL_INGRESOS = 'TOTAL_INGRESOS';
export const TOTAL_EGRESOS = 'TOTAL_EGRESOS';
export const UNSET_TOTAL_INGRESOS = 'UNSET_TOTAL_INGRESOS';
export const UNSET_TOTAL_EGRESOS = 'UNSET_TOTAL_EGRESOS';

export class SetItemsAction implements Action {
  readonly type = SET_ITEMS;

  constructor( public items: IngresoEgreso[]) {}
}

export class UnSetItemsAction implements Action {
  readonly type = UNSET_ITEMS;
}

export class TotalIngresosAction implements Action {
  readonly type = TOTAL_INGRESOS;

  constructor( public items: IngresoEgreso[]) {}
}

export class TotalEgresosAction implements Action {
  readonly type = TOTAL_EGRESOS;

  constructor( public items: IngresoEgreso[]) {}
}

export class UnSetTotalIngresosAction implements Action {
  readonly type = UNSET_TOTAL_INGRESOS;
}

export class UnSetTotalEgresosAction implements Action {
  readonly type = UNSET_TOTAL_EGRESOS;
}

export type actions = SetItemsAction
                    | UnSetItemsAction
                    | TotalEgresosAction
                    | TotalIngresosAction
                    | UnSetTotalEgresosAction
                    | UnSetTotalIngresosAction;
