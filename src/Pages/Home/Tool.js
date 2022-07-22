import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    const {img, name, text, price, qty, availableQty} = tool;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl lg:h-36 lg:w-80" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">{name}</h2>
            <p><span className='text-warning font-bold text-2xl'>Descriptions: </span> <br />
            {text}</p>
            <p>Price: <span> $</span>{price}</p>
            <p>Min Purchase quantity:{qty}</p>
            <p>Available Quantity: {availableQty}</p>
            <button className="btn bg-gradient-to-r from-secondary to-primary"><Link to="/purchase">Purchase</Link></button>
        </div>
    </div>
    );
};

export default Tool;