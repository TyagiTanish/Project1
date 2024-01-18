
import React, { useEffect, useState } from 'react';
import OyoLogo from '../../../../assets/OyoLogo';
import RenderRazorpay from './RenderRazorpay';
import useAuth from '../../../../Hooks/useAuth/useAuth';
const Booking=() => {
    const {request} = useAuth();
    const [displayRazorpay, setDisplayRazorpay] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
      orderId: null,
      currency: null,
      amount: null,
     });
    
    const handleCreateOrder = async (amount:any, currency:any) => {
      const data:any = await request.post('/bookingRequest',
       {
        amount: amount*100, //convert amount into lowest unit. here, Dollar->Cents
        currency,
        keyId: process.env.key_id,
        KeySecret: process.env.key_secret,
       }
      );
    
      if(data && data?.order_id){
        setOrderDetails({
          orderId: data.order_id,
          currency: data.currency,
          amount: data.amount,
        });
        setDisplayRazorpay(true);
    };
}
    return (
      <div>
        <button 
          onClick={() => handleCreateOrder(100, 'INR')}
        >Place Order
        </button>
    
      {displayRazorpay && (
      <RenderRazorpay
        amount={orderDetails.amount}
        currency={orderDetails.currency}
        orderId={orderDetails.orderId}
        keyId={process.env.REACT_APP_RAZORPAY_KEY_ID}
        keySecret={process.env.REACT_APP_RAZORPAY_KEY_SECRET}
      />
      )}
      </div>
    );
};


export default Booking;