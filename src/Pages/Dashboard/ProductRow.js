import React from 'react';

const ProductRow = ({singleParts, index}) => {
    const {name, img, _id }= singleParts;

    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure, you want to delete this product')
            if(confirm){
            const url = `http://localhost:5000/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
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
            <button onClick={() => handleDelete (_id)} class="btn btn-xs btn-error">Remove Product</button></td>
        </tr>
    );
};

export default ProductRow;