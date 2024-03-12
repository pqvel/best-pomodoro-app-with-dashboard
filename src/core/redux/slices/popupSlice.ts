import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopupState = {
  isOpenTodoPopup: boolean;
  todoPopupSectionId: string;
};

const initialState: PopupState = {
  isOpenTodoPopup: false,
  todoPopupSectionId: "",
};

export const popupSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // setTodoPopupActiveTodo: (state, action: PayloadAction<boolean>) => {
    //   state.isOpenTodoPopup = action.payload;
    // },
    setAddTodoPopupSectionId: (state, action: PayloadAction<string>) => {
      state.todoPopupSectionId = action.payload;
    },
  },
});

export const { setAddTodoPopupSectionId } = popupSlice.actions;
export default popupSlice.reducer;
