import React, { useEffect, useState } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const tabStyle = {
  textTransform: "capitalize",
  fontSize: "1.2em",
};
const MobileNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/products":
        setValue(1);
        break;
      case "/faq":
        setValue(3);
        break;
      case "/contact":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      bgcolor={"white"}
      maxWidth={"xl"}
      sx={{
        display: { xs: "block", md: "none" },
        position: "sticky",
        zIndex: 3,
        top: {
          xs: "58px",
          sm: "66px",
        },
      }}
    >
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            onClick={() => {
              navigate("/");
            }}
            sx={{ ...tabStyle }}
            label="home"
          />
          <Tab
            onClick={() => {
              navigate("/products");
            }}
            sx={{ ...tabStyle }}
            label="products"
          />

          <Tab
            onClick={() => {
              navigate("/faq");
            }}
            sx={{ ...tabStyle }}
            label="FAQ"
          />
          <Tab sx={{ ...tabStyle }} label="Contact us" />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default MobileNav;
