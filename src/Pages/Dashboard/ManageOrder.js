import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllOrder(data)})
    }, [])
    return (
        <div className='mt-4'>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       allOrder.map((orders, index)=><OrderRow
                       key={orders._id}
                       orders={orders}
                       index={index}
                       ></OrderRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageOrder;