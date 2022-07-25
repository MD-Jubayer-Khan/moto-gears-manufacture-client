import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer mt-32">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
          <div class="drawer-content flex flex-col px-12">
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
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                    <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                    <li><Link to='/dashboard/allUser'> All Users</Link></li>
                    <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add Product </Link></li>
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
          </div> 
          <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-48 bg-base-100">
              {/* <!-- Sidebar content here --> */}
                 <li><Link to='/dashboard'>My Profile</Link></li>
                  <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                  <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                  <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                  <li><Link to='/dashboard/allUser'> All Users</Link></li>
                  <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                  <li><Link to='/dashboard/addProduct'>Add Product </Link></li>
            </ul>         
          </div>
        </div>
    );
};

export default Dashboard;