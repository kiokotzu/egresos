import { Component, OnInit } from '@angular/core';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { isNullOrUndefined } from 'util';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { IngresoEgreso } from '../ingreso-egreso';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public total: number = 0;

  constructor(private model: IngresoEgresoModel) { }

  ngOnInit(): void {
   this.doughnutChartInfo
     .subscribe(data => {
       if ( !isNullOrUndefined(data)) {
         this.total = data[0] - data[1];
       }
     });
  }

  get totalItems$(): Observable<boolean> {
    return this.model.ingresoEgresoItems$
      .pipe(
        map((items: IngresoEgreso[]) => items.length > 0)
      );
  }

  get totalIngresos$(): Observable<number> {
    return this.model.totalIngresos$;
  }

  get totalEgresos$(): Observable<number> {
    return this.model.totalEgresos$;
  }

  get countIngresos(): Observable<number> {
    return this.model.ingresoEgresoItems$
      .pipe(
        map((items: IngresoEgreso[]) => {
          return items.filter((item: IngresoEgreso) => item.type !== 'egreso').length;
        })
      );
  }

  get countEgresos(): Observable<number> {
    return this.model.ingresoEgresoItems$
      .pipe(
        map((items: IngresoEgreso[]) => {
          return items.filter((item: IngresoEgreso) => item.type !== 'ingreso').length;
        })
      );
  }

  get doughnutChartInfo(): Observable<Array<number>> {
    return zip(this.totalIngresos$, this.totalEgresos$);
  }

}
