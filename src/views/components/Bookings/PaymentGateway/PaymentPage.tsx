// App.js
import React from "react";
import StripeProvider from "./StripeProvider";
import PaymentForm from "./PaymentForm";
import { Box } from "@mui/system";
import { Card, CardContent } from "@mui/material";

const Booking = ({setDisplayLoader,setDisplay,bookingId,totalPrice}:any) => {
  return (
    <StripeProvider>
     
          <Box sx={{ width: 400,padding: 2,border:'1px solid lightgray' }}  >
            <PaymentForm setDisplayLoader={setDisplayLoader} setDisplay={setDisplay} bookingId={bookingId} totalPrice={totalPrice}  />
          </Box>
    
    </StripeProvider>
  );
};

export default Booking;
