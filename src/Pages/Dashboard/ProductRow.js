import React from 'react';

const ProductRow = ({singleParts, index}) => {
    const {name, img, _id, availableQty }= singleParts;

    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure, you want to delete this product')
            if(confirm){
            const url = `https://moto-gears-server.vercel.app/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    const handleRestockQty = ( event) => {
        event.preventDefault();
        const quantity = event.target.qty.value;
        const availableQuantity = availableQty;
        const newQuantity = (+quantity) + (+availableQuantity);
        

        const url = `https://moto-gears-server.vercel.app/restockQty/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
        })

     } 

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-bold'>{name}</td>
            <td><div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        <img src={img} alt="Parts images" />
                    </div>
                </div>
            </td>
            <td>
                <button onClick={() => handleDelete (_id)} class="btn btn-xs btn-error">Remove Product</button>
            </td>
            <td>
            <form onSubmit={handleRestockQty}>
                <input className="input input-sm input-bordered max-w-xs" placeholder='Enter your quantity' type="number"  name='qty' required/>
                <input type="submit" value="Restock Quantity"  className="btn btn-xs btn-success ml-4"/>
            </form>
            </td>

        </tr>
    );
};

export default ProductRow;