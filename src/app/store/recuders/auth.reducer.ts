import * as fromAuth from '../actions/auth.action';
import { User } from '../../auth/user.model';

export interface AuthState {
  user: User;
}

const initStatus: AuthState = {
  user: null
};


export function authReducer(state = initStatus, action: fromAuth.actions): AuthState {
  switch (action.type) {
    case fromAuth.SET_USER:
      return {
        user: {
          ... action.user
        }
      };
    default:
       return state;
  }
}
