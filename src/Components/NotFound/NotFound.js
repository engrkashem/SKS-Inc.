import React from 'react';
import bgNotFound from '../../images/bgNotFound.jpg';

const NotFound = () => {
    return (
        <div className='bg-cover h-screen' style={{ backgroundImage: `url(${bgNotFound})` }}>
            <h2>404, Not found</h2>
        </div>
    );
};

export default NotFound;