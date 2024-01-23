// App.js
import React from 'react';
import StripeProvider from './StripeProvider';
import PaymentForm from './PaymentForm';
import { Box } from '@mui/system';

const Booking = () => {
  return (
    <StripeProvider>
      <Box sx={{width:400,border:'1px solid lightgray',padding:2}} >
        <PaymentForm />
      </Box>
    </StripeProvider>
  );
};

export default Booking;
