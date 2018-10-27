import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApplicationModel } from '../application.model';


@Injectable()
export class AuthModel extends ApplicationModel {

  public isLoading$: Observable<boolean> = this.store.select(store => store.ui.isLoading);
}
