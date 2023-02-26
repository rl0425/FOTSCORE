import { createSlice } from '@reduxjs/toolkit';

const leagueSlice = createSlice({
  name: 'league',

  initialState: {
    link : "eng.1" ,
    rankLink : "eng.1",
    loading: true,
    date: new Date(),
    choiceDate: "today",
    rankLoading: true
  },

  reducers: {
    changeLeague(state, action) {
      state.link = action.payload
    },

    changeRank(state, action) {
      state.rankLink = action.payload.rankLink
      state.rankLoading = action.payload.rankLoading
    },

    changeLoading(state){
      state.loading = !state.loading
    },

    changeRankLoading(state, action){
      state.rankLoading = action.payload.loading
    },

    changeDate(state, action){
      state.loading = !state.loading
      state.date = new Date(action.payload.date)
      state.choiceDate = action.payload.choiceDate
    },

    changeSet(state,action){
      state.link = action.payload.link
      state.loading = !state.loading
      state.date = new Date(action.payload.date)
      state.choiceDate = action.payload.choiceDate
    }
  },
});

export const leagueActions = leagueSlice.actions;

export default leagueSlice;
