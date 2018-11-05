import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ActiveLoadingAction, DeactiveLoadingAction } from './core/store/actions/ui.acctions';
import { ApplicationState } from './core/store/state/application.state';
import { User } from './modules/auth/user';

@Injectable()
export class ApplicationModel {
  constructor(protected store: Store<ApplicationState>) {

  }

  public isLoading$: Observable<boolean> = this.store.select(store => store.ui.loadingBtn);
  public user$: Observable<User> = this.store.select(store => store.global.user);

  public fetchActiveLoading(): void {
    this.store.dispatch(new ActiveLoadingAction());
  }

  public fetchDeactiveLoading(): void {
    this.store.dispatch(new DeactiveLoadingAction());
  }
}
