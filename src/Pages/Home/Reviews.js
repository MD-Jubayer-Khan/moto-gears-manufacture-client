import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
            <p>{review.review}</p>
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt=""/>
                    </div>
                </div>
                <div>
                    <h4 className='text-success'>Email: {review.email}</h4>
                    <p className='text-warning'>Rating: {review.rating}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Reviews;