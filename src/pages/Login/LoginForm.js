import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLoginDetails,
  setLoginError,
  resetLoginDetails,
  login,
} from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

const LoginForm = () => {
  const { email, password, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(updateLoginDetails({ [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoginError(""));
    if (email.trim() === "" || password.trim() === "") {
      dispatch(setLoginError("Email and Password fields cannot be empty."));
      return;
    }
    const emailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_%+-])*@northeastern\.edu$/;
    if (!emailRegex.test(email)) {
      dispatch(
        setLoginError("Invalid email format. Please use a Northeastern email.")
      );
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      const { user } = response.data;
      localStorage.setItem("session", JSON.stringify(user));
      dispatch(login({ userType: user.type }));
      dispatch(resetLoginDetails());
      navigate(user.type === "admin" ? "/employees" : "/home");
    } catch (err) {
      dispatch(
        setLoginError(err.response?.data?.error || "An error occurred.")
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2c3e50",
      }}
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
