import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const categories = [
  { id: 1, title: "Watches", img: "images/watch2.png" },
  { id: 2, title: "Smartphones", img: "images/za-galaxy.png" },
  { id: 3, title: "Laptops", img: "images/laptop.png" },
  { id: 4, title: "Headphones", img: "images/headphones.png" },
  { id: 5, title: "Cameras", img: "images/camera.png" },
  { id: 6, title: "Gaming Consoles", img: "images/gaming.png" },
  { id: 7, title: "Tablets", img: "images/laptop-bg.png" },
  { id: 8, title: "Speakers", img: "images/headphones.png" },
  { id: 9, title: "Televisions", img: "images/camera.png" },
  { id: 10, title: "Fitness Trackers", img: "images/iphone-14-promax.png" },
  { id: 11, title: "Drones", img: "images/za-galaxy.png" },
  { id: 12, title: "Smart Home Devices", img: "images/hero-img.png" },
];

const boxImageStyle = {
  width: { xs: "80vw", sm: "60vw", md: "8vw" },
  height: "16vh",
  borderRadius: "50%",
  padding: "10px",
  bgcolor: "#f4f6f8",
};

const imageContainerStyle = {
  border: "1px solid #e8e1da",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 5px",
  ":hover": {
    boxShadow: "0px 0px 2px 2px #333",
  },
  cursor: "pointer",
};
const Categories = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      mt={4}
    >
      <Grid container>
        <Typography variant="h2" padding={"10px 0px"}>
          Categories
        </Typography>
      </Grid>
      {categories.map((category) => (
        <Grid
          key={category.id}
          item
          xs={5.5}
          sm={2.5}
          md={1.8}
          sx={imageContainerStyle}
        >
          <Box
            component={"img"}
            src={`${category.img}`}
            sx={boxImageStyle}
          ></Box>
          <Box>
            <Typography variant="h4" padding={"15px 0px"}>
              {category.title.length < 10
                ? category.title
                : `${category.title.slice(0, 10)}...`}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
