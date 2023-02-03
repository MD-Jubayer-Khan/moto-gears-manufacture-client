import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [parts, setParts] = useState([])

    useEffect(()=>{
        fetch('https://moto-gears-server.vercel.app/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [parts])
    return (
        <div className='mt-4'>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Action</th>
                        <th>Restock Quantity</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       parts.map((singleParts, index)=><ProductRow
                       key={singleParts._id}
                       singleParts={singleParts}
                       index={index}
                       ></ProductRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageProducts;