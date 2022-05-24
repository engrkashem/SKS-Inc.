import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OrderContext } from './MyOrders';

const Payment = () => {
    const myOrders = useContext(OrderContext);
    const { id } = useParams();

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
            <div className="card-body">
                <h2 className="card-title">Card title!: {myOrders.length} fo {id}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;