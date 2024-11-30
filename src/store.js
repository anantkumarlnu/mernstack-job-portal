import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, userType: null },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userType = action.payload.userType;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userType = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;