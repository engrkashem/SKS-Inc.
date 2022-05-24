import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children }) => {
    // console.log(children.split(',')[1])
    return (
        <NavLink
            to={`/dashboard/${children.split(',')[1]}`}
            className={({ isActive }) =>
                isActive ? 'bg-red-500' : ''
            }
        >
            {children.split(',')[0]}
        </NavLink>
    );
};

export default ActiveLink;