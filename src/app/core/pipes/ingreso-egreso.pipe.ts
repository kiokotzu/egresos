import { Pipe, PipeTransform } from '@angular/core';

import { IngresoEgreso } from '../../modules/ingreso-egreso/ingreso-egreso';

@Pipe({
  name: 'ingresoEgreso'
})
export class IngresoEgresoPipe implements PipeTransform {

  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    return items.sort( (a, b) => {
     if (a.type === 'ingreso') {
       return -1;
     } else {
       return 1;
     }
    })
  }

}
