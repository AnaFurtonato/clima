import { configureStore } from '@reduxjs/toolkit';
import climaReducer from './features/sliceClima';

export const store = configureStore({
  reducer: {
    clima: climaReducer,
  },
});
