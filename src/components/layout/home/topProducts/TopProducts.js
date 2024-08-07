import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";

const products = [
  {
    id: 1,
    title: "Sony PlayStation",
    price: "$52.17",
    image: "/images/virtual-reality.png", // Update with actual image path
  },
  {
    id: 2,
    title: "Microsoft Surface",
    price: "$25.18",
    image: "/images/watch2.png", // Update with actual image path
  },
  {
    id: 3,
    title: "Tesla Model S",
    price: "$43.84",
    image: "/images/smart-watch.png", // Update with actual image path
  },
  {
    id: 4,
    title: "Amazon Echo",
    price: "$60.98",
    image: "/images/za-galaxy.png", // Update with actual image path
  },
];

const boxImageStyle = {
  width: "100%",
  height: "auto",
  padding: "10px",
};

const imageContainerStyle = {
  border: "1px solid #e8e1da",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  ":hover": {
    bgcolor: "#f4f6f8",
  },
  cursor: "pointer",
};

const TopProducts = () => {
  return (
    <Box>
      <Typography variant="h2" padding={"40px 0px"}>
        Top Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Paper sx={imageContainerStyle}>
              <Box
                component={"img"}
                src={`${product.image}`}
                sx={{
                  ...boxImageStyle,
                  padding: "10px",
                  bgcolor: "#f4f6f8",
                  borderRadius: "15px",
                  transition: "all 1s ease",
                  ":hover": { transform: "rotateY(180deg)" },
                  height: { sm: "50vh", md: "30vh", lg: "40vh" },
                }}
              ></Box>
              <Box width={"100%"} textAlign={"center"} mt={2}>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="h6" color={"#f77234"} padding={"10px 0px"}>
                  {product.price}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopProducts;
