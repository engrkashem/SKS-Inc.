import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomActiveLink from './CustomActiveLink';
import Loader from './Loader';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    // console.log(user)

    const links = <>
        <li><CustomActiveLink>home</CustomActiveLink></li>
        {
            user ?
                <li>
                    <CustomActiveLink>dashboard</CustomActiveLink>
                </li>
                : ''
        }
        <li><CustomActiveLink>blogs</CustomActiveLink></li>
    </>

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('secretToken');
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="navbar bg-slate-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <NavLink to={'/'} className="btn btn-ghost normal-case text-4xl">SKS Inc.</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <>
                        <p className='mr-2 text-xl font-semibold hidden md:block'>{user.displayName}</p>
                        <Link onClick={logout} to={'/'} className="btn  custom-button">Log Out</Link>
                    </>
                        : <Link to={'login'} className="btn  custom-button">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;