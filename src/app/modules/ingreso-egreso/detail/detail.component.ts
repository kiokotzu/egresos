import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IngresoEgresoService } from '../../../core/services/ingreso-egreso.service';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { IngresoEgreso } from '../ingreso-egreso';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(
    private model: IngresoEgresoModel,
    private ingresoEgresoService: IngresoEgresoService
  ) { }

  get ingresoEgresos$(): Observable<IngresoEgreso[]> {
    return this.model.ingresoEgresoItems$;
  }

  public deleteItem(uid: string): void {
    this.ingresoEgresoService.deleteItem(uid);
  }

}
