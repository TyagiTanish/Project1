// StripeProvider.js
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Li8s7BQTREDaPxYfCCZF3gjcrdhiQKLw7GZGGghOVdOsP5OQYqvw7jG1T1TcSOiHILc2MjSjBBFmguirYfNkcrQ00UAnnwDk0');

const StripeProvider = ({ children }:any) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;
