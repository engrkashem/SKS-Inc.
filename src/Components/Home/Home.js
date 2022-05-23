import React from 'react';
import Footer from '../Shared/Footer';
import '../../styles/CustomButton.css';
import Banner from './Banner';
import Tools from './Tools';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import bgTools from '../../images/bg-tools.jpg';

const Home = () => {
    //Loading Tools from server (most 6 tools only)
    const { data: tools, isLoading } = useQuery('sixTools', () => {
        const url = `http://localhost:5000/tools`;
        return fetch(url)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Banner></Banner>
            <div className=' bg-cover h-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5' style={{ backgroundImage: `url(${bgTools})` }}>
                {
                    tools.map(tool => <Tools
                        key={tool._id}
                        tool={tool}
                    ></Tools>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;