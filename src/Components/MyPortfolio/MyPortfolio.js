import React from 'react';
import profilePic from '../../images/profile/portfolio.png';
import bgPortfolio from '../../images/bgPortfolio.jpg';

const MyPortfolio = () => {
    return (
        <div className='lg:p-20  text-light bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${bgPortfolio})` }}>
            <div className="card  glass p-5 lg:p-10">
                <h1 className='text-center font-bold text-5xl my-5'>Developer Introduction</h1>
                <div className=' grid grid-cols-1 lg:grid-cols-2 mt-20 items-center gap-10'>
                    <div className="avatar">
                        <div className="w-96 h-96 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                            <img src={profilePic} alt='developer profile pic' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">MOHAMMAD ABUL KASHEM</h2>
                        <h3 className=' text-xl font-medium'>Career Goal: </h3>
                        <p>Want to establish myself a full stack developer in shortest possible time. Working very very hard every day and improving day by day. Ensuring a step ahead than previous day twards goal every single time going to bed.</p>
                        <h3 className=' text-xl font-medium'>Email: <span className=' text-base'>kashemaust@gmail.com</span> </h3>
                        <h3 className=' text-xl font-medium'>Educational Qualification: <span className=' text-base'>BSc in EEE</span> </h3>
                        <h3 className=' text-xl font-medium'>Professional Membership: <span className=' text-base'>MIEB: M-39570</span> </h3>
                        <h3 className=' text-xl font-medium'>Skills: </h3>
                        <ul className='list-disc grid grid-cols-1 lg:grid-cols-2 '>
                            <li >HTML</li>
                            <li>CSS</li>
                            <li >JavaScript</li>
                            <li >ReactJs</li>
                            <li >Firebase</li>
                            <li>C</li>
                            <li >C++</li>
                            <li>MySQL</li>
                        </ul>
                        <h3 className=' text-xl font-medium'>Projects: </h3>
                        <ul className=' list-decimal font-medium text-lg text-teal-500 '>
                            <li ><a href='https://tech-hub-warehouse.web.app/'>Tech Hub Warehouse</a></li>
                            <li ><a href='https://travel-with-elina.web.app/'>Travel Guid Website</a></li>
                            <li ><a href='https://react-event-manager.netlify.app/'>Event Manager</a></li>

                        </ul>

                        <div className="card-actions justify-center mt-10">
                            <button className="btn btn-accent text-slate-900">View LinkedIn Profile</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;