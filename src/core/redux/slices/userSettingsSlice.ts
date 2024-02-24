import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Settings {
  countPomodors: number;
  currentPomodoro: number;
  pomodoroTime: number;
  breakTime: number;
  bigBreakTime: number;
}

const initialState: Settings = {
  countPomodors: 4,
  currentPomodoro: 1,
  pomodoroTime: 5_000, // 25 * 60 * 1000
  breakTime: 10_000, // 5 * 60 * 1000
  bigBreakTime: 20_000, // 20 * 60 * 1000
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setNextPomodoro: (state, action: PayloadAction<number>) => {
      state.currentPomodoro = action.payload;
    },
  },
});
export const { setNextPomodoro } = userSettingsSlice.actions;
export const userSettingsSelector = (state: RootState) => state.settings;
export default userSettingsSlice.reducer;
