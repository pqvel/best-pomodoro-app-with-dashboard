import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopupState = {
  addTodoPopupSectionId: string;
  todoPupupActiveTodo: TodoFindData;
};

type TodoFindData = {
  dashboardId: string;
  sectionId: string;
  todoId: string;
};

const initialState: PopupState = {
  addTodoPopupSectionId: "",
  todoPupupActiveTodo: {
    sectionId: "",
    dashboardId: "",
    todoId: "",
  },
};

export const popupSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAddTodoPopupSectionId: (state, action: PayloadAction<string>) => {
      state.addTodoPopupSectionId = action.payload;
    },
    setTodoPopupActiveTodo: (state, action: PayloadAction<TodoFindData>) => {
      state.todoPupupActiveTodo = action.payload;
    },
  },
});

export const { setAddTodoPopupSectionId, setTodoPopupActiveTodo } =
  popupSlice.actions;
export default popupSlice.reducer;
