import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import {
  DashboardImage,
  dashboardImages,
} from "../../constants/dashboardImages";

type CurrentTodoPomodoro = {
  dashboardId: string;
  sectionId: string;
  todoId: string;
};

export interface Settings {
  // pomodoro
  countPomodors: number;
  pomodoroTime: number;
  breakTime: number;
  bigBreakTime: number;
  // theme
  theme: "light" | "dark";
  dashboardBgImg: DashboardImage;
  // нужно перенсти от сюда в user
  currentTodoPomodoro: CurrentTodoPomodoro;
  currentPomodoro: number;
}

const initialState: Settings = {
  countPomodors: 4,
  pomodoroTime: 25 * 60 * 1000,
  breakTime: 5 * 60 * 1000,
  bigBreakTime: 20 * 60 * 1000,
  theme: "light",
  dashboardBgImg: dashboardImages[0],

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
    setDashboardBgImg: (state, action: PayloadAction<DashboardImage>) => {
      state.dashboardBgImg = action.payload;
    },
    setCountPomodors: (state, action: PayloadAction<number>) => {
      state.countPomodors = action.payload;
    },
    setPomodoroTime: (state, action: PayloadAction<number>) => {
      state.pomodoroTime = action.payload;
    },
    setBreakTime: (state, action: PayloadAction<number>) => {
      state.pomodoroTime = action.payload;
    },
    setBigBreakTime: (state, action: PayloadAction<number>) => {
      state.bigBreakTime = action.payload;
    },
  },
});

export const {
  setNextPomodoro,
  setCurrentTodoPomodoro,
  setDashboardBgImg,
  setCountPomodors,
  setPomodoroTime,
  setBreakTime,
  setBigBreakTime,
} = userSettingsSlice.actions;
export const userSettingsSelector = (state: RootState) => state.settings;
export default userSettingsSlice.reducer;
