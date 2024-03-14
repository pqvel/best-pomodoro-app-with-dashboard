import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Settings {
  countPomodors: number;
  currentPomodoro: number;
  pomodoroTime: number;
  breakTime: number;
  bigBreakTime: number;
  currentTodoId: string;
}

const initialState: Settings = {
  countPomodors: 4,
  currentPomodoro: 1,
  pomodoroTime: 25 * 60 * 1000,
  breakTime: 5 * 60 * 1000,
  bigBreakTime: 20 * 60 * 1000,
  currentTodoId: "",
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setNextPomodoro: (state, action: PayloadAction<number>) => {
      state.currentPomodoro = action.payload;
    },
    setCurrentTodoId: (state, action: PayloadAction<string>) => {
      state.currentTodoId = action.payload;
    },
  },
});

export const { setNextPomodoro, setCurrentTodoId } = userSettingsSlice.actions;
export const userSettingsSelector = (state: RootState) => state.settings;
export default userSettingsSlice.reducer;
