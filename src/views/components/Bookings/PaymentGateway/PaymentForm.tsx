// PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const { request } = useAuth();
  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement as any);

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server

      const response = await request.post("/order", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const result = await response.data;

      if (result.success) {
        console.log("Payment successful:", result.charge);
      } else {
        console.error("Payment failed:", result.error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontSize: "25px", margin: 10 }}>Enter Card details</label>
      <Box sx={{border:'1px dashed lightgray',width:300,height:100,padding:5,m:2    }}   >
        <CardElement  options={cardElementOptions} />
      </Box>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button variant="contained" type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
};

export default PaymentForm;
