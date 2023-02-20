import { configureStore } from '@reduxjs/toolkit';

import leagueSlice from './league-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { league: leagueSlice.reducer, cart: cartSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
