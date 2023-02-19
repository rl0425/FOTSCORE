import { createSlice } from '@reduxjs/toolkit';

const leagueSlice = createSlice({
  name: 'league',
  initialState: { link : "eng.1" },
  reducers: {
    changeLeague(state, action) {
      state.link = action.payload
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const leagueActions = leagueSlice.actions;

export default leagueSlice;
