import { ActionReducerMap } from '@ngrx/store';

import * as fromUI from './ui.reducer';
import * as fromAuth from './auth.reducer';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer
};
