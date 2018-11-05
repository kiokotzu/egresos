import { global } from './globals/index';
import { models } from './models/index';
import { ui } from './ui/index';


import { INITIAL_APPLICATION_STATE } from '../state/application.state';

const reducers = {
  global: global,
  models: models,
  ui: ui
};

export const rootReducer = reducers;
