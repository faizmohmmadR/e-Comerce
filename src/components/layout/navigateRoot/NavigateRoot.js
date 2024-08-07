import { Container, Grid } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation } from "react-router-dom";
const NavigateRoot = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  return (
    <Container>
      <Grid container alignItems={"center"} fontSize={"16px"}>
        <span>Home</span>
        <span>
          <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
        </span>
        <span style={{ color: "blue", textTransform: "capitalize" }}>
          {pathname[1]}
        </span>
      </Grid>
    </Container>
  );
};

export default NavigateRoot;
