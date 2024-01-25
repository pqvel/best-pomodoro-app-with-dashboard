import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopupState = {
  isOpenTodoPopup: boolean;
};

const initialState: PopupState = {
  isOpenTodoPopup: false,
};

export const popupSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsOpenTodoPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenTodoPopup = action.payload;
    },
  },
});

export const { setIsOpenTodoPopup } = popupSlice.actions;
export default popupSlice.reducer;
