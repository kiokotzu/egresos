import * as fromUI from '../actions/ui.acctions';

export interface State {
  isLoading: boolean;
}


const initState: State = {
  isLoading: false
};

export function uiReducer( state = initState, action: fromUI.actions): State {
  switch (action.type) {
    case fromUI.ACTIVE_LOADING:
      return {
        isLoading: true
      };
    case fromUI.DEACTIVATE_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
