import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type CurrentTodoPomodoro = {
  dashboardId: string;
  sectionId: string;
  todoId: string;
};

export interface Settings {
  countPomodors: number;
  pomodoroTime: number;
  breakTime: number;
  bigBreakTime: number;
  // нужно перенсти от сюда в user
  currentTodoPomodoro: CurrentTodoPomodoro;
  currentPomodoro: number;
}

const initialState: Settings = {
  countPomodors: 4,
  pomodoroTime: 25 * 60 * 1000,
  breakTime: 5 * 60 * 1000,
  bigBreakTime: 20 * 60 * 1000,

  currentPomodoro: 1,
  currentTodoPomodoro: {
    dashboardId: "",
    sectionId: "",
    todoId: "",
  },
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setNextPomodoro: (state, action: PayloadAction<number>) => {
      state.currentPomodoro = action.payload;
    },
    setCurrentTodoPomodoro: (
      state,
      action: PayloadAction<CurrentTodoPomodoro>
    ) => {
      state.currentTodoPomodoro = action.payload;
    },
  },
});

export const { setNextPomodoro, setCurrentTodoPomodoro } =
  userSettingsSlice.actions;
export const userSettingsSelector = (state: RootState) => state.settings;
export default userSettingsSlice.reducer;
