import React from 'react';
import Footer from '../Shared/Footer';
import '../../styles/CustomButton.css';
import Banner from './Banner';
import Tools from './Tools';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import bgTools from '../../images/bg-tools.jpg';
import BusinessSummery from './BusinessSummery';
import bgStat from '../../images/bgStat.jpg';
import Reviews from './Reviews';
import bgReview from '../../images/bgReview.jpg';
import Carousel from './Carousel';

const Home = () => {
    //Loading Tools from server 
    const { data: tools, isLoading } = useQuery('sixTools', () => {
        // const url = `http://localhost:5000/tools`;
        const url = `https://agile-badlands-34653.herokuapp.com/tools`;
        return fetch(url)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <div className=' bg-cover h-content ' style={{ backgroundImage: `url(${bgTools})` }}>
                <h2 className=' text-slate-100 text-center font-bold text-6xl py-10'>OUR PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-5' >
                    {
                        tools.map(tool => <Tools
                            key={tool._id}
                            tool={tool}
                        ></Tools>)
                    }
                </div>
            </div>
            <div className='flex flex-col items-center justify-center bg-cover py-20' style={{ backgroundImage: `url(${bgStat})` }}>
                <h1 className=' text-5xl font-bold mb-2'>Appreciated Globally</h1>
                <p className=' text-2xl font-medium mb-10'>Provide Reliability to Clients</p>
                <BusinessSummery></BusinessSummery>
            </div>
            <div className=' bg-cover py-10' style={{ backgroundImage: `url(${bgReview})` }}>
                <h1 className=' uppercase text-6xl font-bold text-center my-5'>Testimony</h1>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;