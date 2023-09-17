import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import settingsSlice from '../slices/userSettingsSlice';
import todosSlice from '../slices/todosSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingsSlice,
    todos: todosSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;