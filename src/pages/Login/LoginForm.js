import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoginForm = ({ setIsAuthenticated }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    const emailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_%+-])*@northeastern\.edu$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format. Please use a Northeastern email.");
      return;
    }
    if (password.trim().length === 0) {
      setError("Password cannot be empty.");
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
      setIsAuthenticated(true);
      navigate("/home");
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
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Card
        sx={{
          minWidth: 400,
          padding: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: theme.palette.text.primary }}
          >
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: theme.palette.text.primary } }}
            InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { color: theme.palette.text.primary } }}
            InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;