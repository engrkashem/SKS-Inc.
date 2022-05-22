import React from 'react';
import bgBanner from '../../images/bg-banner.jpg';

const Banner = () => {
    return (
        <div className='bg-cover h-screen' style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className='min-w-xs lg:w-3/4 bg-white h-1/2 relative lg:top-40 lg:left-12 lg:flex '>
                <div className=' bg-rose-600 h-full sm:w-full lg:w-1/2 flex flex-col  justify-center items-center'>
                    <h1 className=' text-white font-bold text-4xl'>Think Reliability..</h1>
                    <h1 className=' text-white font-bold text-4xl mt-1'>Pick <span className=' text-6xl'>SKS TOOLS</span></h1>
                    <button className='custom-button mt-5 text-white'>Our Products</button>
                </div>
                <div className=' bg-base-100 h-full sm:w-full lg:w-1/2 font-bold lg:flex flex-col justify-center pl-12 text-rose-600  hidden md:block'>
                    <h2 className=' text-4xl mb-5'>FEATURES</h2>
                    <ul>
                        <li className=' text-xl'>High Silicon Content RAW Material</li>
                        <li className=' text-xl'>Fully Automated Machine</li>
                        <li className=' text-xl'>Skilled Workers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;