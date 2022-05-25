import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool: { name, price, moq, description, _id, img, quantity } }) => {

    const navigate = useNavigate();

    return (
        <div className="card glass">
            <figure><img className=' h-64 w-full' src={img} alt={name} /></figure>
            <div className="card-body text-slate-200">
                <h2 className=" text-center text-3xl font-semibold text-teal-400">{name}</h2>
                <p>Description: <small>{description.slice(0, 30)}...</small></p>
                <p>Minimum Order: <span className=' text-2xl font-semibold text-teal-300'>{moq}</span> pcs./order</p>
                <p>Stock Available: <span className=' text-2xl font-semibold text-teal-300'>{quantity}</span> pcs.</p>
                <p>Price: <span className=' text-2xl font-semibold text-teal-300'>$ {price}</span> per pcs.</p>
                <div className="card-actions justify-center mt-5">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-accent">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;