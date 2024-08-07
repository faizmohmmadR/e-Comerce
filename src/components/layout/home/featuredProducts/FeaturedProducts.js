import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SubCarts from "./SubCarts";
const boxImageStyle = {
  width: { xs: "80vw", sm: "60vw", md: "30vw" },
  height: { xs: "30vh", sm: "90vh", md: "50vh" },
  padding: "10px",
  borderRadius: "15px",
};

const imageContainerStyle = {
  border: "1px solid #e8e1da",
  bgcolor: "#edd3c7",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 5px",
  ":hover": {
    bgcolor: "#f2a079",
  },
  cursor: "pointer",
};

const spanStyle = {
  padding: "10px 20px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "5px",
  fontWeight: "bold",
};

const FeaturedProducts = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      mt={12}
      mb={5}
    >
      <Grid container>
        <Typography variant="h2" padding={"10px 0px"}>
          Featured Products
        </Typography>
      </Grid>
      <Grid container gap={2} justifyContent={"space-between"}>
        <Grid item xs={12} md={5.8} lg={3.8} sx={imageContainerStyle}>
          <Box
            component={"img"}
            src={`/images/smart-watch.png`}
            sx={boxImageStyle}
          ></Box>
          <Box sx={{ width: { xs: "50%", md: "90%" } }} textAlign={"center"}>
            <Typography variant="h6" fontWeight={"bold"} color="#964b38">
              iPhone Apple
            </Typography>
            <Typography
              variant="h5"
              color={"#852f07"}
              fontWeight={"bold"}
              padding={"10px 0px"}
            >
              From $2343
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <span style={spanStyle}>1</span>:<span style={spanStyle}>12</span>
              :<span style={spanStyle}>22</span>:{" "}
              <span style={spanStyle}>22</span>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={5.8}
          lg={3.8}
          sx={{
            ...imageContainerStyle,
            bgcolor: "#e2c5fa",
            ":hover": { bgcolor: "#c489f5" },
          }}
        >
          <Box
            component={"img"}
            src={`/images/laptop.png`}
            sx={boxImageStyle}
          ></Box>
          <Box sx={{ width: { xs: "50%", md: "90%" } }} textAlign={"center"}>
            <Typography variant="h6" fontWeight={"bold"} color="#644082">
              iPhone Apple
            </Typography>
            <Typography
              variant="h5"
              color={"#45136e"}
              fontWeight={"bold"}
              padding={"10px 0px"}
            >
              From $2343
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <span style={spanStyle}>1</span>:<span style={spanStyle}>12</span>
              :<span style={spanStyle}>22</span>:{" "}
              <span style={spanStyle}>22</span>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={3.8}>
          <SubCarts />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturedProducts;
