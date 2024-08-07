import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import productsData from "./productsData";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const Cards = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const navigate = useNavigate();
  const { addToCart, wishlistItems, addToWishlist, removeWishlistItem } =
    useContext(Context);

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/shopping-cart");
  };

  const handleToggleWishList = (product) => {
    if (isInWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <Grid container gap={2} justifyContent={"center"}>
      {productsData.map((product) => (
        <Grid
          item
          xs={12}
          sm={5}
          md={3.7}
          lg={3.7}
          key={product.id}
          sx={{ height: { xs: "50vh", sm: "56vh", xl: "15vh" } }}
          onMouseOver={() => setHoveredCardId(product.id)}
          onMouseLeave={() => setHoveredCardId(null)}
          onClick={() => handleCardClick(product)}
        >
          <Paper
            sx={{
              boxShadow: "0px 0px 3px 0px  #333",
              overflow: "hidden",
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={product.imageUrl}
              sx={{
                width: "100%",
                height: "62%",
                objectFit: "cover",
                borderRadius: "5px",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.1)",
                },
              }}
              alt={product.title}
            />
            <Box padding={"5px"} flexGrow={1} mt={1}>
              <Typography variant="h6" fontWeight={"bold"}>
                {product.title.length < 25
                  ? product.title
                  : `${product.title.slice(0, 24)}...`}
              </Typography>

              <Box mt={1}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography sx={{ textDecoration: "line-through" }}>
                    $ {product.prevPrice}
                  </Typography>
                  {hoveredCardId === product.id && (
                    <Typography variant="h6">${product.price}</Typography>
                  )}
                </Grid>

                {hoveredCardId !== product.id && (
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid container>
                        <Typography variant="h6">${product.price}</Typography>
                      </Grid>

                      <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"end"}
                        color={"blue"}
                      >
                        <StarIcon />
                        <span>{product.stars}</span>
                      </Grid>
                    </Box>
                  </Box>
                )}

                {hoveredCardId === product.id && (
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid item xs={8}>
                        <Button
                          variant="outlined"
                          sx={{ textTransform: "capitalize" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          Add To Cart
                        </Button>
                      </Grid>

                      <Grid
                        item
                        xs={2}
                        alignItems={"center"}
                        justifyContent={"end"}
                        color={"blue"}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleWishList(product);
                        }}
                      >
                        <IconButton>
                          {isInWishlist(product.id) ? (
                            <FavoriteIcon color="error" />
                          ) : (
                            <FavoriteBorderIcon />
                          )}
                        </IconButton>
                      </Grid>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                left: "0px",
                width: "15%",
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
                bgcolor: "#DCA47C",
                color: "white",
                padding: "5px",
              }}
            >
              {product.discount}%
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
