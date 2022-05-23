import React from 'react';

const Tools = ({ tool: { name, price, moq, description, manufacturer, img, quantity } }) => {
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body text-slate-200">
                <h2 className=" text-center text-3xl font-semibold text-teal-400">{name}</h2>
                <p>Description: <small>{description.slice(0, 30)}...</small></p>
                <p>Minimum Order: <span className=' text-2xl font-semibold text-teal-300'>{moq}</span> pcs./order</p>
                <p>Stock Available: <span className=' text-2xl font-semibold text-teal-300'>{quantity}</span> pcs.</p>
                <p>Price: <span className=' text-2xl font-semibold text-teal-300'>$ {price}</span> per pcs.</p>
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-accent">Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;