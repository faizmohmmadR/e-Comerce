import React, { useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import NavBar from "./components/layout/navBar/NavBar";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/layout/navBar/MobileNav";
import Theme from "./components/commonComponents/theme/Theme";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <Grid container maxWidth={"xl"} margin={"0px auto"}>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <MobileNav />
        <Grid container mt={9}>
          <Outlet />
        </Grid>
        <Footer />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
