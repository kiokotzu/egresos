import * as fromIngresoTotal from '../../../actions/ingreso-egreso.action';
import { IngresoEgreso } from '../../../../ingreso-egreso/ingreso-egreso';

export function totalEgresosReducer(state = 0, action: fromIngresoTotal.actions): number {
  switch (action.type) {
    case fromIngresoTotal.TOTAL_EGRESOS:

      const items = action.items.filter( (item: IngresoEgreso) => item.type !== 'ingreso');

      if (items.length > 0) {
        return items.map((item: IngresoEgreso) => item.count)
                    .reduce( (sum, x) => sum + x);
      } else {
        return 0;
      }
    case fromIngresoTotal.UNSET_TOTAL_INGRESOS:
      return 0;
    default:
      return state;
  }
}

