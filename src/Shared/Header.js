import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);


  const logOut = () => {
    signOut(auth);
     localStorage.removeItem('accessToken')
  }

  const menuItm = <>

         <li><Link to="/">Home</Link></li>
         <li><Link to="/blogs">Blogs</Link></li>
         <li><Link to="/reviews">Reviews</Link></li>
         <li><Link to="/purchase">Purchase</Link></li>
         <li><Link to="/about">My Portfolio</Link></li> 

              {
                user && <li><Link to="/dashboard">Dashboard</Link></li>
              }
              
            <li>{user ? <button className='btn btn-ghost' onClick={logOut}>Sign Out</button> :<Link to="/login">Login</Link>}</li>
            {
              user && <div class="avatar">
              <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt='profile images' />
              </div>
            </div>
            }
         </>
         

    return (
        <div className="navbar bg-gradient-to-r from-secondary to-primary p-6 text-white fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
              {menuItm}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl lg:ml-20">Moto Gears</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 lg:ml-">
              {menuItm}
          </ul>
        </div>
      </div>
    );
};

export default Header;