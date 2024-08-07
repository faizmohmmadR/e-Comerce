import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useLocation } from "react-router-dom";
import SearchModal from "../searchModal/SearchModal"; // Import the SearchModal component
import Context from "../../context/Context"; // Import context

const iconStyle = { color: "black", ":hover": { cursor: "pointer" } };
const tabStyle = {
  textTransform: "capitalize",
  fontSize: "1.2em",
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { wishlistItems } = useContext(Context); // Get wishlist items from context

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container maxWidth={"xl"} position="sticky" top="0px" zIndex={2}>
      <Container>
        <AppBar
          sx={{
            bgcolor: "white",
            boxShadow: "0px 0px 0px",
            borderBottom: "2px solid #e4e8f0",
          }}
        >
          <Toolbar>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item xs={2} md={1}>
                <Typography variant="h6" color={"gray"}>
                  Logo
                </Typography>
              </Grid>
              <Grid
                item
                sm={7}
                md={6}
                sx={{ display: { xs: "none", md: "block" } }}
              >
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
                  <Tab
                    onClick={() => {
                      navigate("/contact");
                    }}
                    sx={{ ...tabStyle }}
                    label="Contact us"
                  />
                </Tabs>
              </Grid>
              <Grid
                item
                xs={10}
                sm={7}
                md={4.4}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                <Box mt={1} mr={1} display={"flex"}>
                  <Badge
                    badgeContent={wishlistItems.length}
                    sx={{ mt: "5px" }}
                    color="error"
                    onClick={() => {
                      navigate("/wish-list");
                    }}
                  >
                    <FavoriteIcon sx={{ ...iconStyle, margin: "0px 5px" }} />
                  </Badge>
                  <Button onClick={handleOpen} sx={{ ...iconStyle }}>
                    <SearchIcon />
                  </Button>
                  <Button>
                    <MarkUnreadChatAltIcon
                      sx={{ ...iconStyle, margin: "0px 5px" }}
                    />
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Login / Sign Up
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {/* Search Modal Section */}
        <SearchModal open={open} handleClose={handleClose} />
      </Container>
    </Grid>
  );
};

export default NavBar;
