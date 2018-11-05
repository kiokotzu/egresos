import { combineReducers } from '@ngrx/store';

import { authReducer  as user} from './user/user.reducer';

export const global = combineReducers({
  user
});
