import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/recuders/app.reducer';

@Injectable()
export class ApplicationModel {
  constructor(protected store: Store<AppState>) {

  }
}
