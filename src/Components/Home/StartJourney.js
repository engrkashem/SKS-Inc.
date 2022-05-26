import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgStartJourney from '../../images/bgStartJourney.png';

const StartJourney = () => {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgStartJourney})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Let's Walk a Small Step With Us</h1>
                    <p className="mb-5">We are the Manufacturer of Heavy Duty Inductial Electric Hand Operatable Tools or Machines. Start an Exciting Journey Joining with US and Keep Exploring Heavy Duty Professional Machine World.</p>
                    <button onClick={() => navigate('/dashboard')} className="custom-button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default StartJourney;