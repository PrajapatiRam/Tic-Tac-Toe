'use strict';

import AppReducer from './Reducers/AppReducer';

import {createStore} from 'redux';

export const ReduxStore = () => {
  return createStore(AppReducer);
};
