import { combineReducers } from '@ngrx/store';

import { loadingBtnsReducer as loadingBtn } from './loading/loading.reducer';


export const ui = combineReducers({
  loadingBtn
});

