import React from 'react';

const BusinessSummery = () => {
    return (
      <div>
        <h2 className='text-2xl font-bold'>Our Business Summery</h2>
           <div className="stats stats-vertical lg:stats-horizontal shadow bg-gradient-to-r from-secondary to-primary p-6 text-white my-4">
           <div className="stat">
             <div className="stat-title">Total Customer</div>
             <div className="stat-value">100+</div>
             <div className="stat-desc">Jan 1st - Feb 1st</div>
           </div>

           <div className="stat">
             <div className="stat-title">Annual Revenue</div>
             <div className="stat-value">125M+</div>
             <div className="stat-desc">↗︎ 400 (22%)</div>
           </div>

           <div className="stat">
             <div className="stat-title">Total tools</div>
             <div className="stat-value">50+</div>
             <div className="stat-desc">↘︎ 90 (14%)</div>
           </div>

           <div className="stat">
             <div className="stat-title">Our client Review</div>
             <div className="stat-value">35k+</div>
             <div className="stat-desc">↘︎ 90 (14%)</div>
           </div>

          </div>
          
      </div>
    );
};

export default BusinessSummery;