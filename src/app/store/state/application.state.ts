import { ModelsState, INITIAL_MODELS_STATE } from './models.state';
import { GlobalState, INITIAL_GLOBAL_STATE } from './global.state';
import { UiState, INITIAL_UI_STATE } from './ui.state';

export type ApplicationState = Readonly<{
  global: GlobalState;
  models: ModelsState;
  ui: UiState;
}>;

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  global: INITIAL_GLOBAL_STATE,
  models: INITIAL_MODELS_STATE,
  ui: INITIAL_UI_STATE
};

