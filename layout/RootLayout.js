import Header from "./Header";
import Footer from "./Footer";
import { NoSsr } from "@mui/material";

function RootLayout({ children }) {
  return (
    <NoSsr>
      <Header />
      <main>{children}</main>
      <Footer />
    </NoSsr>
  );
}

export default RootLayout;
