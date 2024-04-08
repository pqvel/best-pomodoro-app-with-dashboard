import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type UserInfo = {
  email: string;
  fullname: string;
};

export interface UserState {
  userInfo: UserInfo;
}

const initialState: UserState = {
  userInfo: {
    email: "example@gmail.com",
    fullname: "John Doe",
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
