import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./custom_theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import JobListings from "./pages/JobListings/JobListings";
import Contact from "./pages/Contact/Contact";
import CompanyShowcase from "./pages/CompanyShowcase/CompanyShowcase";
import Employees from "./pages/Employees/Employees";
import AddJob from "./pages/addJob/addJob";
import LoginForm from "./pages/Login/LoginForm";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state) => state.auth.userType);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("session");
    dispatch(logout());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated && (
          <Navbar onLogout={handleLogout} userType={userType} />
        )}
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <LoginForm />
                ) : (
                  <Navigate
                    to={userType === "admin" ? "/employees" : "/home"}
                  />
                )
              }
            />
            {userType === "employee" && (
              <>
                <Route
                  path="/home"
                  element={
                    isAuthenticated ? <Home /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/about"
                  element={
                    isAuthenticated ? <About /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/jobs"
                  element={
                    isAuthenticated ? <JobListings /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/contact"
                  element={
                    isAuthenticated ? <Contact /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/companies"
                  element={
                    isAuthenticated ? (
                      <CompanyShowcase />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
              </>
            )}
            {userType === "admin" && (
              <>
                <Route
                  path="/employees"
                  element={
                    isAuthenticated ? <Employees /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/addJob"
                  element={
                    isAuthenticated ? <AddJob /> : <Navigate to="/login" />
                  }
                />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;