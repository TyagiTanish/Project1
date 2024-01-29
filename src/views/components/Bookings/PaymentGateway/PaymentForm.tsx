// PaymentForm.js
import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import io from "socket.io-client";
const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});
/**
* to show payment card . Markdown is *PaymentForm*.
*/
const PaymentForm = ({ setDisplayLoader, setDisplay, bookingId,totalPrice }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const { request } = useAuth();
  const cardElementOptions = {
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
      setDisplay(false);
      setDisplayLoader(true);
      const response = await request.post("/order", {
        headers: {
          "Content-Type": "application/json",
        },
        body: {token:JSON.stringify({token}),price:totalPrice},
      });

      const result = await response.data;

      if (result.success) {
        const data = await request.post("/paymentSuccess", {
          transactionId: result.charge.balance_transaction,
          amount_captured: result.charge.amount_captured,
          bookingId: bookingId,
        });
        setTimeout(() => {
          setDisplayLoader(false);
        });
        socket.emit("send_Message", result);
      } else {
        setDisplayLoader(false);
        console.error("Payment failed:", result.error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontSize: "25px", margin: 10 }}>Enter Card details</label>
      <Box sx={{ width: 350, padding: 5, m: 2 }}>
        <CardElement options={cardElementOptions} />
      </Box>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button variant="contained" type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
  );
};

export default PaymentForm;
