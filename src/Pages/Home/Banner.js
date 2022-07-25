import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/img/motorBike.webp';

const Banner = () => {
    return (
        <div className="hero min-h-screen text-white bg-fixed" style={{backgroundImage: `url(${img})`, clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0 100%)'}} >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
            <h1 className="text-5xl font-bold">Welcome To Moto Gears!</h1>
            <p className="py-6">Here we provide any kind of parts/tools, gears or accessories for motorcycle</p>
            <button className="btn bg-gradient-to-r from-secondary to-primary"><Link to="/login">Get Started</Link></button>
            </div>
        </div>
        </div>
    );
};

export default Banner;