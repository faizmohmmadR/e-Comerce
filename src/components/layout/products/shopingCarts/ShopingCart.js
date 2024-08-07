import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Paper,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Context from "../../../context/Context";

const ShoppingCart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { updateCartItemQuantity, removeCartItem, discount, applyDiscount } =
    useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDiscountedTotal = () => {
    const total = calculateTotal();
    return total - discount;
  };

  const handleUpdateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateCartItemQuantity(itemId, newQuantity); // Update context
  };

  const handleRemoveCartItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    removeCartItem(itemId); // Update context
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      padding={isMobile ? "20px" : "0px 20px"}
      mt={12}
      mb={5}
      spacing={2}
    >
      <Grid item xs={12} md={11.7} borderBottom={"5px solid green"} pb={2}>
        <Typography mt={2} variant="h3" fontWeight={"bold"}>
          Shopping Cart
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
              {cartItems.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
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
                        handleUpdateCartItemQuantity(
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
                    <IconButton onClick={() => handleRemoveCartItem(item.id)}>
                      <DeleteOutline />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cart Summary
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Subtotal:
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              ${calculateTotal().toFixed(2)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Discount:
            </Typography>
            <TextField
              type="number"
              value={discount}
              onChange={(e) => applyDiscount(parseFloat(e.target.value))}
              InputProps={{
                inputProps: { min: 0 },
              }}
              variant="outlined"
              size="small"
              sx={{ width: "100px" }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Shipping:
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              $5.00
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Tax:
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              $2.50
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Total:
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              ${(calculateDiscountedTotal() + 5 + 2.5).toFixed(2)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Checkout by</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/stripe-payment");
              }}
            >
              Online Payment
            </Button>
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Cash Payment
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;
