import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./custom_theme"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import JobListings from "./pages/JobListings/JobListings";
import Contact from "./pages/Contact/Contact";
import CompanyShowcase from "./pages/CompanyShowcase/CompanyShowcase";
import LoginForm from "./pages/Login/LoginForm";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("session");
    setIsAuthenticated(!!session);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
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
                  <LoginForm setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={isAuthenticated ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs"
              element={
                isAuthenticated ? <JobListings /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/contact"
              element={isAuthenticated ? <Contact /> : <Navigate to="/login" />}
            />
            <Route
              path="/companies"
              element={
                isAuthenticated ? <CompanyShowcase /> : <Navigate to="/login" />
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;