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
    setIsOpenTodoPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenTodoPopup = action.payload;
      console.log(state.isOpenTodoPopup);
    },
    setTodoPopupSectionId: (state, action: PayloadAction<string>) => {
      state.todoPopupSectionId = action.payload;
      console.log(state.todoPopupSectionId);
    },
  },
});

export const { setIsOpenTodoPopup, setTodoPopupSectionId } = popupSlice.actions;
export default popupSlice.reducer;
