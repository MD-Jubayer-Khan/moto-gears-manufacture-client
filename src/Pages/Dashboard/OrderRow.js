import React from 'react';

const OrderRow = ({orders, index}) => {
    const {Parts, qty, user }= orders;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><span className='font-bold'>{Parts}</span> <br /> <small className='text-error-content'>{user}</small></td>
            <td className='font-bold'>{qty}</td>
        <td>
            <button class="btn btn-xs btn-error">pending</button>
        </td>
        </tr>
    );
};

export default OrderRow;