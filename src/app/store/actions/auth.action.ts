import { Action } from '@ngrx/store';
import { User } from '../../auth/user.model';

export const SET_USER = 'SET_USER';


export class SetUserAction implements Action {
  readonly type = SET_USER;

  constructor(public user: User) {}
}


export type actions = SetUserAction;
