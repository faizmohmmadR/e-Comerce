import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import productsData from "../products/productsData";

const modalStyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 400, sm: 600, md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
};

const SearchModal = ({ open, handleClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = productsData.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            bgcolor: "white",
            zIndex: 1,
            p: 2,
            borderBottom: "5px solid green",
          }}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={10}>
              <TextField
                type="search"
                fullWidth
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={2} textAlign="right">
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setFilteredProducts(productsData);
                  handleClose();
                }}
              >
                <HighlightOffIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 1, p: 3, maxHeight: 400, overflowY: "auto" }}>
          <Grid container spacing={2}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "background.paper",
                      boxShadow: 1,
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: 170,
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography variant="subtitle1" mt={2}>
                      {product.title.length < 22
                        ? product.title
                        : `${product.title.slice(0, 22)}...`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price.toFixed(2)} USD
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                >
                  No products found.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
