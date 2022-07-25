import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit,  reset } = useForm(); 
    const [user] = useAuthState(auth)
    
    const onSubmit = data => {
        console.log(data);
        fetch('https://limitless-fjord-63635.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            if(result.success){
                toast.success('Product added successfully')
            }
        } )
        reset()
    };
    return (
<div className='card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" value={user?.email} {...register("email", { required: true, })} />

                <input className="input input-bordered w-full max-w-xs mb-4 my-4" value={user?.photoURL} type="text" {...register("img",  { required: true })} />

                <textarea className="input input-bordered w-full max-w-xs" placeholder='Enter your review' {...register("review",  { required: true })} />

                <input className="input input-bordered w-full max-w-xs my-4" placeholder='Enter your rating' type="number" {...register("rating",  { required: true })} />

                
                <input type="submit" value="Add Product"  className="input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary mb-8"/>
            </form>
        </div>
    );
};

export default AddReview;