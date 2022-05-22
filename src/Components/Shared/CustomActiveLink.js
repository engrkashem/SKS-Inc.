import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomActiveLink = ({ children }) => {
    return (
        <NavLink
            to={children}
            className={({ isActive }) =>
                isActive ? ' text-rose-600 border-2 border-rose-600 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button'
            }
        >
            {children}
        </NavLink>
    );
};

export default CustomActiveLink;