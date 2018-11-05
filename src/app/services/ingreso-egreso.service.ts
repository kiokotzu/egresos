import { AngularFirestore } from '@angular/fire/firestore';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';


import { IngresoEgresoModel } from '../ingreso-egreso/ingreso-egreso.model';
import { IngresoEgreso } from '../ingreso-egreso/ingreso-egreso';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(
    private afDB: AngularFirestore,
    private authService: AuthService,
    private model: IngresoEgresoModel
  ) { }


  public initIngresoEgresoListener(): void {
    this.model.user$
      .pipe(
        filter( user => !isNullOrUndefined(user))
      )
      .subscribe( user => this.ingresoEgresoItems(user.uid));
  }

  public createIngresoEgreso(ingresoEgreso: IngresoEgreso): Promise<object> {

    const user = this.authService.getUser();

    return this.afDB.doc(`${user.uid}/ingreso-egresos`)
      .collection('items').add({...ingresoEgreso});
  }

  public deleteItem(uid: string): Promise<any> {
    const user = this.authService.getUser();
    return this.afDB.doc(`${user.uid}/ingreso-egresos/items/${uid}`)
      .delete();
  }


  private ingresoEgresoItems(uid: string) {
    this.afDB.collection(`${uid}/ingreso-egresos/items`)
      .snapshotChanges()
      .pipe(
        map(item => {
          return item.map( data => {
            return {
              uid: data.payload.doc.id,
              ...data.payload.doc.data()
            };
          });
        })
      )
      .subscribe((colection) => this.model.fetchSetItems(colection));
  }



}
