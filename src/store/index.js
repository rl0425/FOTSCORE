import { configureStore } from '@reduxjs/toolkit';

import leagueSlice from './league-slice';
import settingSlice from './setting-slice';

const store = configureStore({
  reducer: { league: leagueSlice.reducer, setting: settingSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
