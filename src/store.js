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

const employeeSlice = createSlice({
  name: "employees",
  initialState: { users: [], loading: false, error: "" },
  reducers: {
    setEmployees(state, action) {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    setEmployeeLoading(state) {
      state.loading = true;
      state.error = "";
    },
    setEmployeeError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const jobListSlice = createSlice({
  name: "jobList",
  initialState: { jobs: [], loading: false, error: "" },
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
      state.loading = false;
      state.error = "";
    },
    setJobLoading(state) {
      state.loading = true;
      state.error = "";
    },
    setJobError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { email: "", password: "", error: "" },
  reducers: {
    updateLoginDetails(state, action) {
      state.email = action.payload.email || state.email;
      state.password = action.payload.password || state.password;
    },
    setLoginError(state, action) {
      state.error = action.payload;
    },
    resetLoginDetails(state) {
      state.email = "";
      state.password = "";
      state.error = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export const { showAlert, hideAlert } = alertSlice.actions;
export const { updateJobDetails, resetJobDetails } = jobSlice.actions;
export const { setEmployees, setEmployeeLoading, setEmployeeError } =
  employeeSlice.actions;
export const { setJobs, setJobLoading, setJobError } = jobListSlice.actions;
export const { updateLoginDetails, setLoginError, resetLoginDetails } =
  loginSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    job: jobSlice.reducer,
    employees: employeeSlice.reducer,
    jobList: jobListSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;