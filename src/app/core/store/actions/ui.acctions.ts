import { Action } from '@ngrx/store';

export const ACTIVE_LOADING = 'ACTIVE_LOADING';
export const DEACTIVATE_LOADING = 'DEACTIVATE_LOADING';


export class ActiveLoadingAction implements Action {
 readonly type = ACTIVE_LOADING;
}

export class DeactiveLoadingAction implements Action {
  readonly type = DEACTIVATE_LOADING;
}

export type actions = ActiveLoadingAction | DeactiveLoadingAction;
