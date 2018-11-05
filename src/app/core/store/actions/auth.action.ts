import { Action } from '@ngrx/store';
import { User } from '../../../modules/auth/user';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export class SetUserAction implements Action {
  readonly type = SET_USER;

  constructor(public user: User) {}
}

export class UnsetUserAction implements Action {
  readonly type = UNSET_USER;
}


export type actions = SetUserAction | UnsetUserAction;
