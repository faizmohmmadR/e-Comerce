import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const categories = [
  { id: 1, title: "Watches", img: "images/watch2.png" },
  { id: 2, title: "Laptops", img: "images/hero-img.png" },
  { id: 3, title: "Headphones", img: "images/headphones.png" },
  { id: 4, title: "Gaming Consoles", img: "images/gaming.png" },
  { id: 5, title: "Tablets", img: "images/laptop-bg.png" },
  { id: 6, title: "Speakers", img: "images/headphones.png" },
];

const boxImageStyle = {
  width: { xs: "80vw", sm: "60vw", md: "12vw" },
  height: { xs: "20vh", md: "22vh" },
  padding: "10px",
  bgcolor: "#f4f6f8",
  borderRadius: "15px",
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
    bgcolor: "#f4f6f8",
  },
  cursor: "pointer",
};
const hotDealToday = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      mt={12}
    >
      <Grid container>
        <Typography variant="h2" padding={"10px 0px"}>
          🔥 Hot Deal Today
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
          <Box width={"90%"} textAlign={"start"} mt={1}>
            <Typography variant="h4">
              {category.title.length < 11
                ? category.title
                : `${category.title.slice(0, 11)}...`}
            </Typography>
            <Typography variant="h4" color={"#f77234"} padding={"10px 0px"}>
              $2343
            </Typography>
            <Box display="flex" alignItems={"center"}>
              <Typography
                sx={{
                  bgcolor: "#b5b3b1",
                  height: "4px",
                  width: "35%",
                  borderRadius: "5px",
                }}
              ></Typography>
              <Typography variant="body2" pl={1}>
                {" "}
                🔥 456 sold
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default hotDealToday;
