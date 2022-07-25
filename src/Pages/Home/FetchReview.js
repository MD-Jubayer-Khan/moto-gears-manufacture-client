import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const FetchReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    return (
        <section className='my-28'>
          <h4 className="text-3xl text-primary font-bold">Testimonials</h4>
             <h2 className='font-bold mt-1'>What's our client say!</h2>
            <div className='flex justify-between'>
                <div>
                    <img src={reviews.img} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default FetchReview;