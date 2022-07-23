import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
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

   },[_id, parts]);

    const handleDecrease = (parts) => {
        const quantity = parts.qty;
        
        const newQuantity = quantity - 1;
        if(newQuantity >= 100){

        const url = `http://localhost:5000/decreaseQty/${_id}`;
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

     else{
            alert('Minimum purchase quantity is 100')
     }
 }

   
    const handleIncrease = (parts) => {
        const quantity = parts.qty;
        const availableQuantity = parts.availableQty;
        const newQuantity = quantity + 1;
        
        if(newQuantity <= availableQuantity){
        const url = `http://localhost:5000/increaseQty/${_id}`;
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
        
     else{
        alert("sorry we donn't have enough stock")
        }
    }


   


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
                   <p>Quantity: <button onClick={()=>handleDecrease(parts)} className='btn btn-xs btn-error'>Decrease </button> {qty} <button onClick={()=> handleIncrease(parts)} className='btn btn-xs btn-success'> Increase</button></p>
                   <p>Available Quantity: {availableQty}</p>
                   <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" disabled />
                   <input type="text" value={user.email} class="input input-bordered w-full max-w-xs" disabled />
                   <input type="number" placeholder="Enter your number" className="input input-bordered w-full max-w-xs" />
                   <input type="text" placeholder="Enter your address" className="input input-bordered w-full max-w-xs" />
                   <button  className="btn bg-gradient-to-r from-secondary to-primary"><a >Order now</a></button>
               </div>
           </div>
    );
};

export default Purchase;