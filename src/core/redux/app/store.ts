import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import settingsSlice from "../slices/userSettingsSlice";
import dashboardSlice from "../slices/dashboardSlice";

export const store = configureStore({
	reducer: {
		user: userSlice,
		settings: settingsSlice,
		dashboard: dashboardSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
