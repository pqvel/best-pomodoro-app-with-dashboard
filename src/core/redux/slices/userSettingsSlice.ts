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
  pomodoroTime: 10_000,
  breakTime: 300,
  bigBreakTime: 1200,
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setNextPomodoro: (state) => {
      if (state.currentPomodoro === state.countPomodors) {
        state.currentPomodoro = 1;
      } else {
        state.currentPomodoro += 1;
      }
    },
    updateCountPomodoros: (state, action: PayloadAction<number>) => {
      state.countPomodors = action.payload;
    },
  },
});
export const { setNextPomodoro } = userSettingsSlice.actions;
export const userSettingsSelector = (state: RootState) => state.settings;
export default userSettingsSlice.reducer;
