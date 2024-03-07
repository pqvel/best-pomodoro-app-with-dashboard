import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import settingsSlice from "../slices/userSettingsSlice";
import dashboardSlice from "../slices/dashboardSlice";
import popupSlice from "../slices/popupSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingsSlice,
    dashboard: dashboardSlice,
    popup: popupSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
