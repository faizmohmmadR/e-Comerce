import React, { useState } from "react";
import { Box, Grid, Typography, Button, Paper, Tab, Tabs } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    id: 1,
    title: "Apple iPhone",
    price: "$83.74",
    oldPrice: "$97.14",
    image: "/images/apple-mac.png", // Update with actual image path
    rating: 4,
    sold: 497,
  },
  {
    id: 2,
    title: "Samsung Galaxy",
    price: "$97.14",
    oldPrice: "$68.71",
    image: "/images/accessories.png", // Update with actual image path
    rating: 4,
    sold: 763,
  },
  {
    id: 3,
    title: "Nike Air Max",
    price: "$68.71",
    oldPrice: "$85.21",
    image: "/images/air-pods.png", // Update with actual image path
    rating: 4,
    sold: 684,
  },
  {
    id: 4,
    title: "Adidas Ultraboost",
    price: "$85.21",
    oldPrice: "$52.17",
    image: "/images/smart-watch.png", // Update with actual image path
    rating: 4,
    sold: 451,
  },
  {
    id: 5,
    title: "Sony PlayStation",
    price: "$52.17",
    oldPrice: "$25.18",
    image: "/images/smart-phone.png", // Update with actual image path
    rating: 4,
    sold: 433,
  },
  {
    id: 6,
    title: "Microsoft Surface",
    price: "$25.18",
    image: "/images/playstation.png", // Update with actual image path
    rating: 4,
    sold: 463,
  },
  {
    id: 7,
    title: "Tesla Model S",
    price: "$43.84",
    image: "/images/mouse.png", // Update with actual image path
    rating: 4,
    sold: 951,
  },
  {
    id: 8,
    title: "Amazon Echo",
    price: "$60.98",
    image: "/images/laptop-bg.png", // Update with actual image path
    rating: 3,
    sold: 194,
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
  cursor: "pointer",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const ProductCard = ({ product }) => (
  <Paper sx={productCardStyle}>
    <Box
      display="flex"
      justifyContent="center"
      mb={2}
      sx={{ padding: "15px", bgcolor: "#f4f6f8", borderRadius: "15px" }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        width="170px"
        height="150px"
        sx={{
          transition: "all 0.3s ease",
          ":hover": { transform: "scale(1.1)" },
        }}
      />
    </Box>
    <Typography variant="h6">{product.title}</Typography>
    <Box display="flex" alignItems="center" justifyContent="center">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          sx={{
            color: index < product.rating ? "#ffb400" : "#ccc",
            fontSize: 18,
          }}
        />
      ))}
    </Box>
    <Typography variant="body2" color="textSecondary">
      {product.sold} sold
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
  </Paper>
);

const PopularProducts = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h2" padding={"40px 0px"}>
        Popular Products
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Featured Products" />
        <Tab label="Top Rated Products" />
        <Tab label="Onsale Products" />
      </Tabs>
      <Box mt={4}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularProducts;
