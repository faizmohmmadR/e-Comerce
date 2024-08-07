import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const categories = [
  { id: 1, title: "Watches", img: "images/watch2.png" },
  { id: 2, title: "Laptops", img: "images/hero-img.png" },
  { id: 3, title: "Headphones", img: "images/headphones.png" },
  { id: 4, title: "Gaming Consoles", img: "images/gaming.png" },
];

const boxImageStyle = {
  width: { xs: "80vw", sm: "60vw", md: "12vw" },
  height: { xs: "20vh", sm: "35vh", md: "22vh" },
  padding: "10px",
  bgcolor: "#edebe8",
  borderRadius: "15px",
};

const imageContainerStyle = {
  border: "1px solid #e8e1da",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 15px",
  ":hover": {
    bgcolor: "#edebe8",
  },
  cursor: "pointer",
};
const SubCarts = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center" gap={2}>
      {categories.map((category) => (
        <Grid item key={category.id} xs={5.5} sx={imageContainerStyle}>
          <Box
            component={"img"}
            src={`${category.img}`}
            sx={boxImageStyle}
          ></Box>
          <Box width={"100%"} textAlign={"start"} mt={1}>
            <Typography variant="h4">
              {category.title.length < 11
                ? category.title
                : `${category.title.slice(0, 11)}...`}
            </Typography>
            <Typography variant="h4" color={"#f77234"} padding={"10px 0px"}>
              $2343
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubCarts;
