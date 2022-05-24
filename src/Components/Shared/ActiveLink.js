import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children }) => {
    // console.log(children.split(',')[1])
    return (
        <NavLink
            to={`/dashboard/${children.split(',')[1]}`}
            className={({ isActive }) =>
                isActive ? 'border border-rose-600 text-rose-600' : ''
            }
        >
            {children.split(',')[0]}
        </NavLink>
    );
};

export default ActiveLink;