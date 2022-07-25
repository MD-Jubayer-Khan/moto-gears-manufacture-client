import React from 'react';
import Footer from '../../Shared/Footer';
import ExtraPageOne from '../ExtraPage/ExtraPageOne';
import ExtraPageTwo from '../ExtraPage/ExtraPageTwo';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import FetchReview from './FetchReview';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <FetchReview></FetchReview>
            <BusinessSummery></BusinessSummery>
            <ExtraPageTwo></ExtraPageTwo>
            <ExtraPageOne></ExtraPageOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;