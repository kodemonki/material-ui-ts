import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#0F81A3",
    },
    secondary: {
      main: "#66AEC5",
    },
    error: {
      main: "#aa8665",
    },
    success: {
      main: "#e3f9ed",
    },
  },
});

export default theme;
