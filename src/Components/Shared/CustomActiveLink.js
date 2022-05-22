import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomActiveLink = ({ children }) => {
    return (
        <NavLink
            to={children}
            className={({ isActive }) =>
                isActive ? ' bg-blue-500 uppercase h-full block' : 'uppercase'
            }
        >
            {children}
        </NavLink>
    );
};

export default CustomActiveLink;