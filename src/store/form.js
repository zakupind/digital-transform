import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  branch: '',
  digitalLevel: '',
  companyLavel: '',
  geo: '',
  target: '',
  budget: '',
  currency: '',
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
    setCompanyLavel: (state, action) => {
      state.companyLavel = action.payload;
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
  setCompanyLavel,
  setGeo,
  setTarget,
  setBudget,
  setCurrency,
  setProcesses,
} = form.actions;

export const formReducer = form.reducer;
