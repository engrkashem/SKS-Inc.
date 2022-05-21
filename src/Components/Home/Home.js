import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='dashboard'>Dashboard</Link>
            <Link to='blogs'>Blogs</Link>
            <Link to='login'>Login</Link>
            <h2>Home</h2>
        </div>
    );
};

export default Home;