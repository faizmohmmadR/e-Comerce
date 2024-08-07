import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
const products = [
  {
    id: 1,
    title: "Sony PlayStation",
    category: "Health and Wellness",
    price: "$52.17",
    oldPrice: "$25.18",
    image: "/images/accessories.png",
  },
  {
    id: 2,
    title: "Microsoft Surface",
    category: "Toys and Games",
    price: "$25.18",
    image: "/images/watch2.png",
  },
  {
    id: 3,
    title: "Tesla Model S",
    category: "Sports and Outdoors",
    price: "$43.84",
    image: "/images/smart-watch.png",
  },
  {
    id: 4,
    title: "Amazon Echo",
    category: "Baby and Kids",
    price: "$60.98",
    image: "/images/smart-phone.png",
  },
];

const mainContainerStyle = {
  padding: { xs: 2, md: 4 },
};

const productCardStyle = {
  padding: 2,
  borderRadius: 2,
  textAlign: "center",
  border: "1px solid #f4f6f8",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const ProductCard = ({ product }) => (
  <Paper sx={productCardStyle}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      bgcolor={"#f4f6f8"}
      borderRadius={"10px"}
      width={"39%"}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        width="100%"
        height="100%"
      />
    </Box>
    <Box width={"60%"} textAlign={"start"} pl={2}>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {product.category}
      </Typography>
      <Typography variant="h6" color="primary">
        {product.price}
        {product.oldPrice && (
          <Typography
            variant="body2"
            component="span"
            sx={{ textDecoration: "line-through", ml: 1 }}
          >
            {product.oldPrice}
          </Typography>
        )}
      </Typography>
      <Box textAlign={"end"}>
        <Button
          sx={{
            mt: 2,
            color: "white",
            borderRadius: "10px",
            fontWeight: "bold",
            bgcolor: "#323133",
            ":hover": { bgcolor: "#6e6a73" },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  </Paper>
);

const FeaturedBarands = () => {
  return (
    <Box mb={3}>
      <Typography variant="h2" padding={"40px 0px"}>
        Featured Brands
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              ...productCardStyle,
              textAlign: "left",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box>
                <AppleIcon sx={{ fontSize: "6rem" }} />
              </Box>
              <Typography variant="h5" fontWeight="bold">
                Apple
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={2}>
                While most people enjoy casino gambling, sports betting,
                lottery, and bingo playing.
              </Typography>
              <Button variant="text" color="primary">
                More Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedBarands;
