import { Injectable } from '@angular/core';

import { SetUserAction, UnsetUserAction } from '../store/actions/auth.action';
import { UnSetItemsAction, UnSetTotalEgresosAction, UnSetTotalIngresosAction } from '../store/actions/ingreso-egreso.action';
import { ApplicationModel } from '../application.model';
import { User } from './user';

@Injectable()
export class AuthModel extends ApplicationModel {

  public fetchSetUser(user: User): void {
    this.store.dispatch(new SetUserAction(user));
  }

  public unSetUser(): void {
    this.store.dispatch(new UnsetUserAction());
    this.store.dispatch(new UnSetItemsAction());
    this.store.dispatch(new UnSetTotalEgresosAction());
    this.store.dispatch(new UnSetTotalIngresosAction());
  }

}
