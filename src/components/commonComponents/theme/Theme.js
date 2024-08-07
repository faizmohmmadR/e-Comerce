// src/theme.js
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: "#333",
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: "#444",
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.4,
      color: "#555",
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: 1.2,
      color: "#2b2b2a",
    },
    body1: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#666",
    },
    body2: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#777",
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      textTransform: "capitalize",
      color: "#fff",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default Theme;
