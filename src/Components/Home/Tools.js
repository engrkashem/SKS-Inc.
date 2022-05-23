import React from 'react';

const Tools = ({ tool: { name, price, moq, description, manufacturer, img, quantity } }) => {
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Description: <small>{description}</small></p>
                <p>Minimum Order: <span>{moq}</span> pcs./order</p>
                <p>Stock Available: <span>{quantity}</span> pcs.</p>
                <p>Price: <span>$ {price}</span> per pcs.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;