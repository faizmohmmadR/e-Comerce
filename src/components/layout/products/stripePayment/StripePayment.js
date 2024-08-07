// src/PaymentForm.jsx
import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("PaymentMethod:", paymentMethod);
      // Send paymentMethod.id to your server for processing
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 14 }}>
      <Paper sx={{ padding: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Payment Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Name" name="name" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!stripe}
              >
                Pay
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePayment;
