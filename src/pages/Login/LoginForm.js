import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store"; // Import the login action
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (email.trim() === "" || password.trim() === "") {
      setError("Email and Password fields cannot be empty.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_%+-])*@northeastern\.edu$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format. Please use a Northeastern email.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      const { user } = response.data;
      localStorage.setItem("session", JSON.stringify(user));
      localStorage.setItem("userImages", JSON.stringify(user.imagesPath));
      dispatch(login({ userType: user.type }));
      navigate(user.type === "admin" ? "/employees" : "/home");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred.");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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