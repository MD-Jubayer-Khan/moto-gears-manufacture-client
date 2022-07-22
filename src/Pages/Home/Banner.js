import React from 'react';
import img from '../../Assets/img/motorBike.webp';

const Banner = () => {
    return (
        <div class="hero min-h-screen text-white bg-fixed" style={{backgroundImage: `url(${img})`}}>
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div>
            <h1 class="text-5xl font-bold">Welcome To Moto Gears!</h1>
            <p class="py-6">Here we provide any kind of parts/tools, gears or accessories for motorcycle</p>
            <button class="btn bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;