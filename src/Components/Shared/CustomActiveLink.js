import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomActiveLink = ({ children }) => {
    return (
        <NavLink
            to={children}
            className={({ isActive }) =>
                isActive ? ' bg-primary uppercase h-full block font-semibold' : 'uppercase font-semibold'
            }
        >
            {children}
        </NavLink>
    );
};

export default CustomActiveLink;