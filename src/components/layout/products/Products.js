import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Tab,
  Tabs,
  Drawer,
  IconButton,
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import LaptopIcon from "@mui/icons-material/Laptop";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import HubIcon from "@mui/icons-material/Hub";
import WatchIcon from "@mui/icons-material/Watch";
import TvIcon from "@mui/icons-material/Tv";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Cards from "./Cards";
import NavigateRoot from "../navigateRoot/NavigateRoot";

const tabStyle = { textTransform: "capitalize" };

const Products = () => {
  const [value, setValue] = useState(0);
  const [openList, setOpenList] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (listItem) => {
    setOpenList((prevOpenList) => ({
      ...prevOpenList,
      [listItem]: !prevOpenList[listItem],
    }));
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const FilterList = () => (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{ fontWeight: "bold", fontSize: "1.2em" }}
          component="div"
          id="nested-list-subheader"
        >
          Filter
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick("color")}>
        <ListItemText primary="Color" />
        {openList["color"] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList["color"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Red" />
              <FormControlLabel control={<Checkbox />} label="Black" />
              <FormControlLabel control={<Checkbox />} label="White" />
            </FormGroup>
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("price")}>
        <ListItemText primary="Price" />
        {openList["price"] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList["price"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="2000" />
              <FormControlLabel control={<Checkbox />} label="10000" />
              <FormControlLabel control={<Checkbox />} label="200000" />
            </FormGroup>
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("sizes")}>
        <ListItemText primary="Sizes" />
        {openList["sizes"] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList["sizes"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Small" />
              <FormControlLabel control={<Checkbox />} label="Medium" />
              <FormControlLabel control={<Checkbox />} label="Large" />
            </FormGroup>
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("category")}>
        <ListItemText primary="Category" />
        {openList["category"] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList["category"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Electronic" />
              <FormControlLabel control={<Checkbox />} label="Cloths" />
              <FormControlLabel control={<Checkbox />} label="Drinks" />
            </FormGroup>
          </Box>
        </List>
      </Collapse>
    </List>
  );

  return (
    <Grid
      container
      maxWidth={"xl"}
      justifyContent={"center"}
      color={"text.secondary"}
      mb={7}
    >
      <Grid container sx={{ display: { xs: "none", md: "block" } }} ml={5}>
        <NavigateRoot />
      </Grid>

      <Grid
        container
        width={"90%"}
        margin={"0px auto"}
        mt={3}
        justifyContent={"center"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="icon label tabs example"
        >
          <Tab
            style={tabStyle}
            icon={<StayCurrentPortraitIcon />}
            label="Mobile"
          />
          <Tab style={tabStyle} icon={<TabletMacIcon />} label="Tablet" />
          <Tab style={tabStyle} icon={<WatchIcon />} label="Watches" />
          <Tab style={tabStyle} icon={<HeadphonesIcon />} label="Audio" />
          <Tab style={tabStyle} icon={<LaptopIcon />} label="Wearable" />
          <Tab style={tabStyle} icon={<CameraEnhanceIcon />} label="Camera" />
          <Tab style={tabStyle} icon={<SportsEsportsIcon />} label="Gaming" />
          <Tab style={tabStyle} icon={<HubIcon />} label="Network" />
          <Tab style={tabStyle} icon={<TvIcon />} label="Tv" />
          <Tab
            style={tabStyle}
            icon={<DevicesOtherIcon />}
            label="Other Devices"
          />
        </Tabs>
      </Grid>

      <Grid
        container
        justifyContent={"center"}
        sx={{ width: { xs: "100%", sm: "90%", md: "100%", lg: "90%" } }}
        mt={4}
        spacing={2}
      >
        <Grid item xs={12} display={{ xs: "block", md: "none" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            <FilterList />
          </Drawer>
        </Grid>

        <Grid item xs={12} md={2} display={{ xs: "none", md: "block" }}>
          <FilterList />
        </Grid>

        <Grid item xs={12} md={10}>
          <Cards />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
