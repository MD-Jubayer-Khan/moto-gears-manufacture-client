import React from 'react';

const ExtraPageTwo = () => {
    
    return (
       <div className='flex flex-wrap items-center justify-center '>
            <div className='ml-10'>
                <h1 class="text-5xl font-bold">Welcome To Moto Gears!</h1>
                <p class="py-6">Here we provide any kind of parts/tools, gears or accessories for motorcycle</p>
                <button class="btn bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <div class="mockup-phone border-primary my-10">
                 <div class="camera"></div> 
                    <div class="display">
                     <div class="artboard artboard-demo phone-1">
                        <div class="hero min-h-screen bg-base-200">
                          <div class="hero-content flex-col flex-row-reverse">
                            <div class="text-center ">
                              <h1 class="text-5xl font-bold">Login now!</h1>
                            </div>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div class="card-body">
                                <div class="form-control">
                                  <label class="label">
                                    <span class="label-text">Email</span>
                                  </label>
                                  <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                  <label class="label">
                                    <span class="label-text">Password</span>
                                  </label>
                                  <input type="text" placeholder="password" class="input input-bordered" />
                                  <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                  </label>
                                </div>
                                <div class="form-control mt-6 ">
                                  <button class="btn btn-primary">Login</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                 </div>
            </div>
       </div>
    );
};

export default ExtraPageTwo;