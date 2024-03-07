import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: User = {
  id: "1",
  name: "John Doe",
  email: "john@test.com",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
