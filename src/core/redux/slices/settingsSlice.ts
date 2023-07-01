import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Settings {
  pomodoro: {
    countWorkTimeToBigBreak: number
    currentWorkTime: number
    workTimeSeconds: number
    breakTimeSeconds: number
    bigBreakTimeSeconds: number
  }
}

const initialState: Settings = {
  pomodoro: {
    countWorkTimeToBigBreak: 4,
    currentWorkTime: 0,
    workTimeSeconds: 1500,
    breakTimeSeconds: 300,
    bigBreakTimeSeconds: 1200,
  },
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings() {
      console.log('a')
    }
  },
});
export const { setSettings } = settingsSlice.actions;
export const settingsSelector = (state: RootState) => state.settings;
export default settingsSlice.reducer;