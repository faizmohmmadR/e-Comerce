import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: "65vh" }}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Have a question or want to work with us? Fill out the form and
              we'll get back to you as soon as possible.
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: "65vh" }}>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn color="primary" />
              <Typography variant="body1" ml={2}>
                1 Main Street, Kandahar AF
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Phone color="primary" />
              <Typography variant="body1" ml={2}>
                +93 707435453
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Email color="primary" />
              <Typography variant="body1" ml={2}>
                info@example.com
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
