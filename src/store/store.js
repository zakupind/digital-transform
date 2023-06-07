import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { uiReducer } from './ui';
import { formReducer } from './form';
import api from '../api';

const reducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
