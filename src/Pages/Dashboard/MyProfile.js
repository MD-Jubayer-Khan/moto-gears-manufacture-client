import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import img from '../../Assets/img/notFound.jpg'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState([])
    const [user] = useAuthState(auth)
    const { register, handleSubmit,  reset } = useForm(); 

    useEffect(()=>{
        const url = `http://localhost:5000/user/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => {

            setUserInfo(data)})

    },[user.email, userInfo])
    
    const onSubmit = data => {
        const url = `http://localhost:5000/userInfo/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          
        })
        .then(res=> res.json())
        .then(result =>{
            if(result.success){
                toast.success('Profile update successfully')
            }
        } )
        reset()
    };

    return (
        <div className='flex'>
        <div class="artboard phone-3 bg-base-200 mt-2">           
        <div class="avatar mt-4">
            <div class="w-24 rounded-full">
             <img className='bg-base-300' src={user?.photoURL || img} alt="User profile" />
            </div>
         </div>
            <p className='m-4'>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p className='my-4'>Education: {userInfo?.education}</p>
            <p>Location: {userInfo?.location}</p>
            <p className='m-4'>Phone Number: {userInfo?.phone}</p>
            <button className='btn btn-xs btn-info'><a href={userInfo.linkedin} target="_blank" rel="noreferrer" >LinkedIn Profile</a></button>
        </div>

            <div className='m-4'>
            <div className='card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='Education' {...register("education")} />
                <textarea className="input input-bordered w-full max-w-xs my-4" placeholder='Enter your address' {...register("location")} />
                <input className="input input-bordered w-full max-w-xs" placeholder='Your phone number' {...register("phone")} />
                <input className="input input-bordered w-full max-w-xs my-4" placeholder='Linkedin profile link' type="text" {...register("linkedin")} />
                <input type="submit" value="Update Profile"  className="input input-bordered w-full max-w-xs btn bg-gradient-to-r from-secondary to-primary mb-8"/>
            </form>
        </div>
            </div>
        </div>
    );
};

export default MyProfile;