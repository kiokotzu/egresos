import * as fromUI from '../../../actions/ui.acctions';


export function loadingBtnsReducer( state: boolean = false, action: fromUI.actions): boolean {
  switch (action.type) {
    case fromUI.ACTIVE_LOADING:
      return  true;
    case fromUI.DEACTIVATE_LOADING:
      return false;
    default:
      return state;
  }
}
