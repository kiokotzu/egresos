import { IngresoEgreso } from '../../../modules/ingreso-egreso/ingreso-egreso';

export type ModelsState = Readonly<{
  ingresoEgreso: {
    items: IngresoEgreso[],
    totalIngresos: number,
    totalEgresos: number
  }
}>;

export const INITIAL_MODELS_STATE: ModelsState = {
  ingresoEgreso: {
    items: [],
    totalIngresos: 0,
    totalEgresos: 0
  }
};
