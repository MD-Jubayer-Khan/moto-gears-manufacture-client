import React from 'react';

const BusinessSummery = () => {
    return (
      <div class="stats stats-vertical lg:stats-horizontal shadow bg-gradient-to-r from-secondary to-primary p-6 text-white my-4">
  
      <div class="stat">
        <div class="stat-title">Total Customer</div>
        <div class="stat-value">100+</div>
        <div class="stat-desc">Jan 1st - Feb 1st</div>
      </div>
      
      <div class="stat">
        <div class="stat-title">Annual Revenue</div>
        <div class="stat-value">125M+</div>
        <div class="stat-desc">↗︎ 400 (22%)</div>
      </div>
      
      <div class="stat">
        <div class="stat-title">Total tools</div>
        <div class="stat-value">50+</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>

      <div class="stat">
        <div class="stat-title">Our client Review</div>
        <div class="stat-value">35k+</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
      
    </div>
    );
};

export default BusinessSummery;