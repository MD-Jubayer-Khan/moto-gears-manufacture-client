import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import img from '../Assets/img/notFound.jpg'

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
         <li><Link to="/myPortfolio">My Portfolio</Link></li> 

              {
                user && <li><Link to="/dashboard">Dashboard</Link></li>
              }

              {
                !user && <li><Link to="/login">Login</Link></li>
              }
              
            {
              user && <div class="dropdown dropdown-end text-primary">
              <label tabIndex="0" class="btn btn-secondary btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={user.photoURL ? user.photoURL : img } alt='profile pictures' />
                </div>
              </label>
              <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full ml-4">
                  <img src={user.photoURL ? user.photoURL : img } alt='profile pictures' />
                </div>
              </label>
                <li>
                <h3 className='font-bold'>{user.displayName}</h3>
                </li>
                <li><Link to='/dashboard'>Update profile</Link></li>
                <li>{user ? <button className='btn btn-ghost' onClick={logOut}>Sign Out</button> :<Link to="/login">Login</Link>}</li>
              </ul>
            </div>
            }
         </>
         

    return (
        <div className="navbar bg-gradient-to-r from-secondary to-primary p-3 text-white fixed top-0 z-50" style={{height:'80px'}}>
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