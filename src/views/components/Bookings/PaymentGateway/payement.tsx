
import React, { useEffect } from 'react';
import OyoLogo from '../../../../assets/OyoLogo';
const PayByRazorPay = () => {
    const options = {
        key: 'rzp_test_uic91cd9JLYdsr',
        amount: '100', //  = INR 1
        name: 'OYO',
        description: 'some description',
        image:<OyoLogo/>,
        handler: function(response:any) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        
    };

    const openPayModal = () => {
        const rzp1 = new (window as any).Razorpay(options as any);
        rzp1.open()
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <button onClick={openPayModal}>Pay with Razorpay</button>
        </>
    );
};

export default PayByRazorPay;