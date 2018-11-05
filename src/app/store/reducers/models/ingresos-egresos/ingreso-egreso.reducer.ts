import * as fromIngresoEgreso from '../../../actions/ingreso-egreso.action';
import { IngresoEgreso } from '../../../../ingreso-egreso/ingreso-egreso';


export function  ingresoEgresoReducer(state = [], action: fromIngresoEgreso.actions ): IngresoEgreso[] {
  switch (action.type) {

    case fromIngresoEgreso.SET_ITEMS:
      return [
        ...action.items.map( item => {
          return {
            ...item
          };
        })
      ];
    case fromIngresoEgreso.UNSET_ITEMS:
      return [];

    default:
      return state;
  }
}
