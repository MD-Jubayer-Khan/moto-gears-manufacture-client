import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LPiM4GjdXO4GakUrOzGWxKRqPTl5ipbmIPwdF8qWDEWH9vELv6dUaLboymSK0FzV89O9538WeJ88h7IcWKq7o9t00SdIJUN72');
    // sk_test_51LPiM4GjdXO4GakUZyci0fopyPzjRz24EsM8dY8p5jCTNsJ6HJUhvkI0HmnjrYVG2k3Q5UftLKNO19YTRs7QL3XX00Ct4FRuxC
const Payment = () => {
    const {_id} = useParams();
    const url = `http://localhost:5000/order/${_id}`

    const {data: payment, isLoading} = useQuery('order', ()=> fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className='mx-auto'>
        <div class="card w-96 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {payment.userName}</p>
                <h2 class="card-title">Please Pay for: {payment.Parts}</h2>
                <p>Quantity: <span className='text-orange-700'>{payment.qty}</span></p>
                <p>Payment Amount: ${payment.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;