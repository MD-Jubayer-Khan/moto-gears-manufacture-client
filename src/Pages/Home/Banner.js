import React from 'react';
import img from '../../Assets/img/motorBike.webp';

const Banner = () => {
    return (
        <div class="hero min-h-screen text-white" style={{backgroundImage: `url(${img})`}}>
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;