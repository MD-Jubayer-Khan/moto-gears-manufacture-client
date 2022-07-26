// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import img from '../../Assets/img/notFound.jpg'
// import { toast } from 'react-toastify';
// import { useForm } from 'react-hook-form';

// const MyProfile = () => {
//     const [user] = useAuthState(auth)

//     const { register, handleSubmit,  reset } = useForm(); 
    
//     const onSubmit = data => {
//         fetch('https://limitless-fjord-63635.herokuapp.com/parts', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res=> res.json())
//         .then(result =>{
//             if(result.success){
//                 toast.success('Product added successfully')
//             }
//         } )
//         reset()
//     };

//     return (
//         <div className='flex'>
//         <div class="artboard phone-3 bg-base-300 mt-2">           
//         <div class="avatar mt-4">
//             <div class="w-24 rounded-full">
//              <img src={user?.photoURL || img} alt="profile" />
//             </div>
//          </div>
//             <p>Name: {user.displayName}</p>
//         </div>

//             <div className='m-4'>
//             <div className='card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-auto'>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input className="input input-bordered w-full max-w-xs" placeholder='Name' {...register("name", { required: true, })} />
//                 <textarea className="input input-bordered w-full max-w-xs my-4" placeholder='describe' {...register("text")} />
//                 <input className="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price")} />
//                 <input className="input input-bordered w-full max-w-xs my-4" placeholder='Minimum Quantity should 100' type="number" {...register("qty")}  />
//                 <input className="input input-bordered w-full max-w-xs my-4" placeholder='Total Quantity' type="number" {...register("availableQty")} />
//                 <input className="input input-bordered w-full max-w-xs mb-4" placeholder='Photo URL' type="text" {...register("img")} />
//                 <input type="submit" value="Add Product"  className="input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary mb-8"/>
//             </form>
//         </div>
//             </div>
//         </div>
//     );
// };

// export default MyProfile;