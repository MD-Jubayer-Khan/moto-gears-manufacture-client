import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer mt-20">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
          <div class="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <div class="w-full navbar bg-base-300">
              <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <div class="flex-1 px-2 lg:ml-20 text-2xl font-bold text-secondary ">Dashboard</div>
              <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <li><a>My Profile</a></li>
                  <li><a>Add Review</a></li>
                  <li><a>My Order</a></li>
                  <li><a>Manage Order</a></li>
                  <li><a> All Users</a></li>
                  <li><a>Manage Products</a></li>
                  <li><a>Add Product </a></li>
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
          </div> 
          <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
              {/* <!-- Sidebar content here --> */}
                  <li><a>My Profile</a></li>
                  <li><a>Add Review</a></li>
                  <li><a>My Order</a></li>
                  <li><a>Manage Order</a></li>
                  <li><a> All Users</a></li>
                  <li><a>Manage Products</a></li>
                  <li><a>Add Product </a></li>
            </ul>         
          </div>
        </div>
    );
};

export default Dashboard;