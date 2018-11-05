import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { IngresoEgreso } from './ingreso-egreso';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.css']
})
export class IngresoEgresoComponent implements OnInit {

  public formEgreso: FormGroup;
  private type = 'ingreso';

  constructor(
    private ingresoEgresoService: IngresoEgresoService,
    private model: IngresoEgresoModel
    ) { }


  ngOnInit(): void {
    this.initForm();
  }

  get loadingBtn(): Observable<boolean> {
    return this.model.isLoading$;
  }

  get validateText(): boolean {
    return this.type === 'ingreso';
  }

  public createIngreso(): void {
    this.model.fetchActiveLoading();
    const ingresoEgreso = new IngresoEgreso({...this.formEgreso.value, type: this.type});
    this.ingresoEgresoService.createIngresoEgreso(ingresoEgreso)
      .then( () => {
        this.model.fetchDeactiveLoading();
        this.formEgreso.reset({
          count: 0
        });
      })
      .catch( () => this.model.fetchDeactiveLoading());
  }

  public changeText(type: string) {
    this.type = type;
  }

  private initForm(): void {
    this.formEgreso = new FormGroup({
      'description': new FormControl('', Validators.required),
      'count': new FormControl(0, Validators.min(1))
    });
  }

}
