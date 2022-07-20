import React from 'react';
import Footer from '../../Shared/Footer';
// import ExtraPageOne from '../ExtraPage/ExtraPageOne';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            {/* <ExtraPageOne></ExtraPageOne> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;