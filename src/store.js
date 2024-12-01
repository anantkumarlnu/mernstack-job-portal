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

const alertSlice = createSlice({
  name: "alert",
  initialState: { open: false, message: "", severity: "" },
  reducers: {
    showAlert(state, action) {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    hideAlert(state) {
      state.open = false;
      state.message = "";
      state.severity = "";
    },
  },
});

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobDetails: {
      companyName: "",
      jobTitle: "",
      description: "",
      salary: "",
      location: "",
    },
  },
  reducers: {
    updateJobDetails(state, action) {
      state.jobDetails = { ...state.jobDetails, ...action.payload };
    },
    resetJobDetails(state) {
      state.jobDetails = {
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
        location: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const { showAlert, hideAlert } = alertSlice.actions;
export const { updateJobDetails, resetJobDetails } = jobSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    job: jobSlice.reducer,
  },
});

export default store;