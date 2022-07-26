import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {_id} = useParams();
    const url = `http://localhost:5000/order/${_id}`
    return (
        <div>
            <h1>Payment for {_id}</h1>
        </div>
    );
};

export default Payment;