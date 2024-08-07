// src/ProductDetails.js
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImageSlider from "./imageSlider/ImageSlider";
import Comments from "./comments/Comments";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const ProductDetails = () => {
  const [value, setValue] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(Context);
  const navigate = useNavigate();

  const product = {
    id: 3,
    name: "Apple iPhone",
    price: 34545,
    imageUrl: "../images/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg",
  };

  return (
    <Grid container mt={1}>
      <Grid container gap={2}>
        <Grid item xs={12} md={7} textAlign={"center"} padding={"0px 20px"}>
          <ImageSlider />
        </Grid>
        <Grid item xs={12} md={4} padding={"0px 20px"}>
          <Box
            sx={{
              backgroundColor: "lightblue",
              color: "darkgreen",
              padding: "5px 10px",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "inline-block",
            }}
          >
            In Stock
          </Box>
          <Typography mt={2} variant="h3" fontWeight={"bold"}>
            Apple iPhone
          </Typography>
          <Box display={"flex"} alignItems={"center"} mt={3}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography ml={1} color={"text.secondary"} fontSize={"12px"}>
              (9911 reviews)
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h5" component="span">
              $34,545
            </Typography>
            <Typography
              component="span"
              sx={{
                textDecoration: "line-through",
                color: "gray",
                marginLeft: "10px",
              }}
            >
              $35,545
            </Typography>
          </Box>
          <Typography color={"text.primary"} mt={1}>
            Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
            molestiae ut facere aut. Est quidem iusto praesentium excepturi
            harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium
            doloribus eaque debitis.
          </Typography>
          <Grid container mt={2} spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12} lg={3}>
              <TextField
                type="number"
                label="Amount"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                placeholder="1,2,3,4"
                size="small"
                fullWidth
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={8}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => {
                  addToCart(product, quantity);
                  navigate("/shopping-cart");
                }}
              >
                Add To Cart
              </Button>

              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                color="primary"
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Comments />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
