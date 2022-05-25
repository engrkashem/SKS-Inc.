import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { OrderContext } from './MyOrders';

const stripePromise = loadStripe('pk_test_51L1o5DIiUKs0u5qlbv5UhAGcsaMKtzoogSnWRrcHf1xcvrrwWgGb8Fp5Vfr28hkGF3huBN6znChJLPE6r0cz4lye00lodgPHIu');

const Payment = () => {
    const contextedInfo = useContext(OrderContext);
    const { myOrders, refetch } = contextedInfo;
    const { id } = useParams();
    const currentOrder = myOrders.filter(order => order._id === id);
    const myOrder = currentOrder[0];
    const { clientName, total, toolName, orderQty } = myOrder;
    // console.log(myOrder);

    return (
        <div className="card bg-transparent lg:w-3/4 shadow-xl mx-auto my-5">
            <div className="card-body">
                <h2 className=" font-semibold"><span className=' text-xl'>{clientName}</span>: Please Pay <span className=' text-2xl'>$ {total}</span> for {orderQty} pcs {toolName}</h2>
            </div>
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        myOrder={myOrder}
                        refetch={refetch}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;