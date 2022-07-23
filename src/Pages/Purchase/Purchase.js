import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [parts, setParts] = useState([]);
    const {img, name, text, price, qty, availableQty} = parts;
    const {_id} = useParams();
    const [user] = useAuthState(auth)

   useEffect(()=>{
       const url = `http://localhost:5000/parts/${_id}`
       fetch(url)
       .then(res => res.json())
       .then(data => setParts(data));

   });
   
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-auto">
               <figure className="px-10 pt-10">
                   <img src={img} alt="Shoes" className="rounded-xl lg:h-36 lg:w-80" />
               </figure>
               <div className="card-body items-center text-center">
                   <h2 className="card-title">Product Name: {name}</h2>
                   <p><span className=' font-bold text-2xl'>Descriptions: </span> <br />
                   {text}</p>
                   <p>Price: <span> $</span>{price}</p>
                   <p>Min Purchase quantity:{qty}</p>
                   <p>Available Quantity: {availableQty}</p>
                   <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" disabled />
                   <input type="text" value={user.email} class="input input-bordered w-full max-w-xs" disabled />
                   <input type="number" placeholder="Enter your number" class="input input-bordered w-full max-w-xs" />
                   <input type="text" placeholder="Enter your address" class="input input-bordered w-full max-w-xs" />
                   <button  className="btn bg-gradient-to-r from-secondary to-primary"><a >Order now</a></button>
               </div>
           </div>
    );
};

export default Purchase;