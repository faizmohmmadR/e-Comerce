import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { DeleteOutline, AddShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(Context);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishlist);
  }, []);

  const removeWishListItem = (id) => {
    const updatedWishlist = wishList.filter((item) => item.id !== id);
    setWishList(updatedWishlist);
    localStorage.setItem("wishList", JSON.stringify(updatedWishlist));
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const updateWishListItemQuantity = (id, quantity) => {
    const updatedWishlist = wishList.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setWishList(updatedWishlist);
    localStorage.setItem("wishList", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeWishListItem(product.id);
    navigate("/shopping-cart");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      padding="20px"
      mt={12}
      spacing={2}
    >
      <Grid item xs={12} md={11.7} borderBottom={"5px solid green"} pb={2}>
        <Typography mt={2} variant="h3" fontWeight={"bold"}>
          Wishlist
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#dee3e0" }}>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishList.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell
                    onClick={() => handleProductClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box display="flex" alignItems="center">
                      <Box mr={2}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography variant="body1" fontWeight="bold">
                        {item.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateWishListItemQuantity(
                          item.id,
                          parseInt(e.target.value)
                        )
                      }
                      InputProps={{
                        inputProps: { min: 1 },
                      }}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => removeWishListItem(item.id)}>
                      <DeleteOutline />
                    </IconButton>
                    <IconButton
                      onClick={() => handleAddToCart(item)}
                      color="primary"
                    >
                      <AddShoppingCart />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Wishlist;
