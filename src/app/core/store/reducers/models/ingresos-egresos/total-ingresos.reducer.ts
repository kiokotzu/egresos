import * as fromEgresoTotal from '../../../actions/ingreso-egreso.action';
import { IngresoEgreso } from '../../../../../modules/ingreso-egreso/ingreso-egreso';

export function totalIngresosReducer(state = 0, action: fromEgresoTotal.actions): number {
  switch (action.type) {
    case fromEgresoTotal.TOTAL_INGRESOS:

      const items = action.items.filter( (item: IngresoEgreso) => item.type !== 'egreso');
      if (items.length > 0) {
        return items.map((item: IngresoEgreso) => item.count)
          .reduce( (sum, x) => sum + x);
      } else {
        return 0;
      }

    case fromEgresoTotal.UNSET_TOTAL_EGRESOS:
      return 0;

    default:
      return state;
  }
}
