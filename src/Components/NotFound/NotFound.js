import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgNotFound from '../../images/bgNotFound.jpg';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${bgNotFound})` }}>
            <button onClick={() => navigate('/home')} className='custom-button btn-lg text-white relative top-[470px] left-[630px] font-bold border-4 border-emerald-400'><Link to={'/home'}> Go to HOME</Link></button>
        </div>
    );
};

export default NotFound;