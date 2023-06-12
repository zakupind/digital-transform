import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { uiReducer } from './ui';
import { formReducer } from './form';
import apiGpt from '../api/gpt';
import apiAirtable from '../api/airTable';

const reducer = combineReducers({
  ui: uiReducer,
  form: formReducer,
  [apiGpt.reducerPath]: apiGpt.reducer,
  [apiAirtable.reducerPath]: apiAirtable.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGpt.middleware, apiAirtable.middleware),
});
