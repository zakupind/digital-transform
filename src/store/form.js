import { createSlice } from '@reduxjs/toolkit';
import {
  optionsDigitalLavel,
  optionsCompanyLevel,
  optionsCurrency,
  optionsBranch,
} from '../constants/options';

const initialState = {
  branch: optionsBranch[0].value,
  digitalLevel: optionsDigitalLavel[0].value,
  companyLevel: optionsCompanyLevel[0].value,
  geo: '',
  target: '',
  budget: '1000000',
  currency: optionsCurrency[0].value,
  processes: '',
};

export const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    setDigitalLevel: (state, action) => {
      state.digitalLevel = action.payload;
    },
    setcompanyLevel: (state, action) => {
      state.companyLevel = action.payload;
    },
    setGeo: (state, action) => {
      state.geo = action.payload;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    },
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setProcesses: (state, action) => {
      state.processes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBranch,
  setDigitalLevel,
  setcompanyLevel,
  setGeo,
  setTarget,
  setBudget,
  setCurrency,
  setProcesses,
} = form.actions;

export const formReducer = form.reducer;
