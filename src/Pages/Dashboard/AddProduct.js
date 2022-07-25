import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm(); 
    
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/parts', {
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
            console.log(result);
        } )
    };
    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input class="input input-bordered w-full max-w-xs" placeholder='Name' {...register("name", { required: true, })} />
                <textarea class="input input-bordered w-full max-w-xs my-4" placeholder='describe' {...register("text",  { required: true })} />
                <input class="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price",  { required: true })} />
                <input class="input input-bordered w-full max-w-xs my-4" placeholder='Minimum Quantity should 100' type="number" {...register("qty", { required: true})}  />
                <input class="input input-bordered w-full max-w-xs my-4" placeholder='Total Quantity' type="number" {...register("availableQty", { required: true })} />
                <input class="input input-bordered w-full max-w-xs mb-4" placeholder='Photo URL' type="text" {...register("img",  { required: true })} />
                <input type="submit" value="Add Service"  className="input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary mb-8"/>
            </form>
        </div>
    );
};

export default AddProduct;