import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/TodoModel";

export type PopupState = {
  addTodoPopupSectionId: string;
  todoPupupActiveTodo: ITodo | null;
};

const initialState: PopupState = {
  addTodoPopupSectionId: "",
  todoPupupActiveTodo: null,
};

export const popupSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAddTodoPopupSectionId: (state, action: PayloadAction<string>) => {
      state.addTodoPopupSectionId = action.payload;
    },
    setTodoPopupActiveTodo: (state, action: PayloadAction<ITodo | null>) => {
      state.todoPupupActiveTodo = action.payload;
    },
  },
});

export const { setAddTodoPopupSectionId, setTodoPopupActiveTodo } =
  popupSlice.actions;
export default popupSlice.reducer;
