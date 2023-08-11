import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "../validation/is-empty";

const initialState = {
  auth: { isAuthenticated: false, user: {} },
  users: [],
  userCount: 0,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.auth.isAuthenticated = !isEmpty(action.payload);
      state.auth.user = action.payload;
    },
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    loadUserCount: (state, action) => {
      state.userCount = action.payload;
    },
    loadUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser, loadUsers, loadUserCount, loadUser } =
  userSlice.actions;

export const selectAuth = (state) => state.user.auth;
export const selectUsers = (state) => state.user.users;
export const selectUserCount = (state) => state.user.userCount;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
