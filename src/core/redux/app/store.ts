import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import settingsSlice from '../slices/settingsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;