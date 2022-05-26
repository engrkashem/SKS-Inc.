import React from 'react';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';
import Blog6 from './Blog6';
import bgBlogs from '../../images/bgBlogs.jpg';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <div className=' lg:px-20 bg-contain h-content' style={{ backgroundImage: `url(${bgBlogs})` }}>
                <h2 className=' text-6xl text-center font-bold py-20'>Our Blogs</h2>
                <div className=' flex flex-col gap-10'>
                    <Blog1></Blog1>
                    <Blog2></Blog2>
                    <Blog3></Blog3>
                    <Blog4></Blog4>
                    <Blog5></Blog5>
                    <Blog6></Blog6>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;