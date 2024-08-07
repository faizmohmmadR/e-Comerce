import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerContainerStyle = {
  padding: { xs: 2, md: 4 },
  backgroundColor: "#f8f9fa",
  borderTop: "1px solid #e8e1da",
  width: "100%",
};

const linkStyle = {
  display: "block",
  marginBottom: "8px",
};

const Footer = () => {
  return (
    <Box sx={footerContainerStyle}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Address: Kandahar, Afghanistan
          </Typography>
          <Typography variant="body2">Phone: +93 700 000 000</Typography>
          <Typography variant="body2">Email: info@ecommerce.com</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Quick Links
          </Typography>
          <Link href="#" underline="none" color="textSecondary" sx={linkStyle}>
            Home
          </Link>
          <Link href="#" underline="none" color="textSecondary" sx={linkStyle}>
            Shop
          </Link>
          <Link href="#" underline="none" color="textSecondary" sx={linkStyle}>
            About Us
          </Link>
          <Link href="#" underline="none" color="textSecondary" sx={linkStyle}>
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Newsletter
          </Typography>
          <Typography variant="body2" mb={2}>
            Subscribe to our newsletter to get the latest updates.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 E-commerce Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
