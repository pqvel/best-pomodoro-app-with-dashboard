import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoPupupActiveTodo = {
  todoId: string;
  sectionId: string;
  dashboardId: string;
};

type PopupState = {
  addTodoPopupSectionId: string;
  todoPupupActiveTodo: TodoPupupActiveTodo;
};

const initialState: PopupState = {
  addTodoPopupSectionId: "",
  todoPupupActiveTodo: {
    todoId: "",
    dashboardId: "",
    sectionId: "",
  },
};

export const popupSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAddTodoPopupSectionId: (state, action: PayloadAction<string>) => {
      state.addTodoPopupSectionId = action.payload;
    },
    setTodoPopupActiveTodo: (
      state,
      action: PayloadAction<TodoPupupActiveTodo>
    ) => {
      state.todoPupupActiveTodo = action.payload;
    },
  },
});

export const { setAddTodoPopupSectionId, setTodoPopupActiveTodo } =
  popupSlice.actions;
export default popupSlice.reducer;
