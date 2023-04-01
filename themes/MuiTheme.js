import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#1e293b",
        dark: "#0f172a",
      },
      secondary: {
        light: "#e01233",
        main: "#C8102E",
        dark: "#b00e29",
      },
      grey: {
        main: "#AAB8C2",
        light: "#F5F8FA",
        menu: "#9D9D9D",
      },
      text: {
        primary: "#000000",
        secondary: "#ffffff",
      },
      success: {
        main: "#1BB934",
      },
      error: {
        main: "#DE5753",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 900,
        md: 1000,
        lg: 1200,
        xl: 1920,
      },
    },
  })
);

theme = responsiveFontSizes(
  createTheme(theme, {
    typography: {
      h1: {
        fontWeight: 700,
        fontSize: "38px",
        color: "#1e293b",
        textAlign: "center",
        "@media (max-width: 599px)": {
          fontSize: "25px",
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: "24px",
        "@media (max-width: 599px)": {
          fontSize: "18px",
        },
      },
      h3: {
        fontWeight: 700,
        fontSize: "30px",
        "@media (max-width: 599px)": {
          fontSize: "22px",
        },
      },
      h4: {
        fontSize: "24px",
        "@media (max-width: 599px)": {
          fontSize: "18px",
        },
      },
      h5: {
        fontWeight: 900,
        fontSize: "14px",
      },
      h6: {
        fontFamily: "Urbane",
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.1,
      },
      subtitle1: {
        fontSize: "18px",
      },
      subtitle2: {
        fontSize: "0.9rem",
      },
      body1: {
        fontWeight: 400,
        fontSize: "1.05rem",
        lineHeight: 1.5,
      },
      body2: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: 1.3,
      },
      muted: {
        fontSize: "0.80rem",
        lineHeight: 1.3,
        color: "#9FA0A7",
      },
      button: {
        textTransform: "none",
        fontSize: "16px",
      },
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "nota" },
            style: {
              fontWeight: 600,
              fontSize: "3.1rem",
              lineHeight: "60.09px",
            },
          },
        ],
      },
      MuiAutocomplete: {
        styleOverrides: {
          listbox: {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  })
);

export default theme;
