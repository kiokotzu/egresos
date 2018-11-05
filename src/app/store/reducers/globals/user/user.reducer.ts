import * as fromAuth from '../../../actions/auth.action';
import { User } from '../../../../auth/user';


export function authReducer(state = null, action: fromAuth.actions): User {
  switch (action.type) {
    case fromAuth.SET_USER:
      return {
        ...action.user
      };
    case fromAuth.UNSET_USER:
      return null;
    default:
       return state;
  }
}
