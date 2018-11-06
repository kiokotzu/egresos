import { global } from './globals';
import { models } from './models';
import { ui } from './ui';

const reducers = {
  global: global,
  models: models,
  ui: ui
};

export const rootReducer = reducers;
