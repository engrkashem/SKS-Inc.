import React from 'react';
import chainsaw from '../../images/tools/chainSaw.jpg';
import grinding from '../../images/tools/grinding.jpg';
import woodPlaner from '../../images/tools/woodPlaner.jpg';
import blower from '../../images/tools/blower.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={chainsaw} className="w-full h-[600px] brightness-50 " alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div className='px-40'>
                        <h3 className=' font-bold text-3xl  text-slate-200 text-center'>CHAINSAW</h3>
                        <p className=' font-medium text-lg  text-slate-200 text-center'>Compact and lightweight design. Handy but robust chain saw with a solid one piece bar for professionals.</p>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={grinding} className="w-full h-[600px] brightness-50" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className='px-40'>
                        <h3 className=' font-bold text-3xl  text-slate-200 text-center'>GRINDING MACHINE</h3>
                        <p className=' font-medium text-lg  text-slate-200 text-center'>Rugged design, Longer service life, heavy duty and Excellent functionality. Hand operated. Used for grinding metal, concreate, cutting metal etc.</p>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={woodPlaner} className="w-full h-[600px] brightness-50" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div className='px-40'>
                        <h3 className=' font-bold text-3xl  text-slate-200 text-center'>WOODPLANER</h3>
                        <p className=' font-medium text-lg  text-slate-200 text-center'>2mm Revit cutting. Plaining of wooden surface. Double insulated. Light weight and heavy duty. Ragged design made for professionals.</p>
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={blower} className="w-full h-[600px] brightness-50" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <div className='px-40'>
                        <h3 className=' font-bold text-3xl  text-slate-200 text-center'>ELECTRIC BLOWER</h3>
                        <p className=' font-medium text-lg  text-slate-200 text-center'> Mind-blowing power,  Easy to service and change carbon brush. Design Lock on button for constant on convenience Offers highest cleaning efficiency amongst its class. </p>
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;