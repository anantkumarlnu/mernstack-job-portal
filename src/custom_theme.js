import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ecc71", // Green for buttons and navbar
    },
    secondary: {
      main: "#34495e", // Dark gray for backgrounds
    },
    background: {
      default: "#2c3e50", // Global background color
      paper: "#34495e", // Card/container background
    },
    text: {
      primary: "#ffffff", // White text for dark backgrounds
      secondary: "#bdc3c7", // Light gray text
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#2c3e50", // Apply global background color
        },
      },
    },
  },
});

export default theme;
