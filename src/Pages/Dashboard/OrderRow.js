import React, { useState } from 'react';

const OrderRow = ({orders, index}) => {
    const {Parts, qty, user }= orders;
   
    const ship = <p className='btn btn-xs btn-success text-white'>Shipped</p>
    const pending = <p className='btn btn-xs btn-error text-white'>Pending</p>
    const [shipped, setShippied] = useState(pending)
    
    const handleShipped =() =>{
        setShippied(ship)
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><span className='font-bold'>{Parts}</span> <br /> <small className='text-error-content'>{user}</small></td>
            <td className='font-bold'>{qty}</td>
        <td>
            <button onClick={handleShipped} >{shipped}</button>
        </td>
        </tr>
    );
};

export default OrderRow;