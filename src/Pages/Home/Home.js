import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;