import React from 'react';
import img from '../../Assets/img/1621227021786.png'

const MyPortfolio = () => {
    return (
<div className='flex flex-wrap'>
        <div class="artboard phone-1 bg-base-200 mt-20">  
        <div class="avatar mt-4">
          <div class="w-24 rounded-full">
            <img src={img} alt='images' />
          </div>
        </div>
            <p className='m-4'>Name: MD Jubayer Khan</p>
            <p>Email: mdjubayerkhan001@gmail.com</p>
            <p className='my-4'>Education: Diploma in engineering </p>
            <button className='btn btn-xs btn-info'>
                <a href='https://www.linkedin.com/feed/'  target="_blank" rel="noreferrer" >LinkedIn Profile</a>
            </button>
        </div>
        <div className='mt-24 mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Some of my Projects</h1>
            <div className='flex flex-wrap lg:grid gap-8 grid-cols-3'>
            <div class="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEZS8QLaKLlUuyWxwADcr4e_43LgdQVkDRg&usqp=CAU' alt="Shoes" />
                </figure>
              <div class="card-body">
                <h2 class="card-title">
                 Career Coach </h2>
                 <div className='flex'>
                     <div class="badge badge-info">React</div>
                     <div class="badge badge-primary ">Bootstrap</div>
                     <div class="badge badge-warning">Javascript</div>                 
                 </div>
                <p>A website for career consulting</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline"><a href='https://program-managment-centre.web.app/'  target="_blank" rel="noreferrer" >Live site</a></div> 
                  <div class="badge badge-outline"><a href='https://github.com/MD-Jubayer-Khan?tab=repositories'  target="_blank" rel="noreferrer" >GitHub</a></div>
                </div>
              </div>

            </div>
            <div class="card w-64 bg-base-100 shadow-xl">
              <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyOX4_o3DLYopyBgeSxHUwMcFAfutxSu_sw&usqp=CAU" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Warehouse Management</h2>
                <div className='flex'>
                     <div class="badge badge-info m-0">React</div>
                     <div class="badge badge-warning ml-2">Node</div>
                     <div class="badge badge-primary ml-0.5">Mongodb</div>                    
                 </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline"><a href='https://corporate-convention-center-jk.netlify.app/'  target="_blank" rel="noreferrer" >Live site</a></div> 
                  <div class="badge badge-outline"><a href='https://github.com/MD-Jubayer-Khan?tab=repositories'  target="_blank" rel="noreferrer" >GitHub</a></div>
                </div>
              </div>

            </div>
            <div class="card w-64 bg-base-100 shadow-xl">
              <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlomc64-L-mwJBLba6ARrvJRQW72Ec62FbLA&usqp=CAU" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">
                    Convention Center
                </h2>
                <div className='flex'>
                     <div class="badge badge-info m-0">HTML</div>
                     <div class="badge badge-warning ml-2">Css</div>
                     <div class="badge badge-primary ml-0.5">Bootstrap</div>                    
                 </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline"><a href='https://program-managment-centre.web.app/'  target="_blank" rel="noreferrer" >Live site</a></div> 
                  <div class="badge badge-outline"><a href='https://github.com/MD-Jubayer-Khan?tab=repositories'  target="_blank" rel="noreferrer" >GitHub</a></div>
                </div>
              </div>
            </div>
            </div>
         </div>
        </div>
    );
};

export default MyPortfolio;