import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uiBlocked: false,
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    blockUi: (state) => {
      state.uiBlocked = true;
    },
    unblockUi: (state) => {
      state.uiBlocked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { blockUi, unblockUi } = ui.actions;

export const uiReducer = ui.reducer;
