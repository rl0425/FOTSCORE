import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    page:"record"
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload.page
    },
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice;
