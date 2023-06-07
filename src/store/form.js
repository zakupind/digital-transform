import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    setBranch: (store, payload) => {
      store.branch = payload;
    },
    setDigitalLevel: (store, payload) => {
      store.digitalLevel = payload;
    },
    setCompanyLavel: (store, payload) => {
      store.companyLavel = payload;
    },
    setGeo: (store, payload) => {
      store.geo = payload;
    },
    setTarget: (store, payload) => {
      store.target = payload;
    },
    setBudget: (store, payload) => {
      store.budget = payload;
    },
    setCurrency: (store, payload) => {
      store.currency = payload;
    },
    setProcesses: (store, payload) => {
      store.processes = payload;
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

const getData = createAsyncThunk(
  'chatGPT/get-data',
  (data, { store, dispatch }) => {}
);
