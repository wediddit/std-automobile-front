import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../themes/MuiTheme";
import RootLayout from "@/layout/RootLayout";
import AuthContextProvider from "@/contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
