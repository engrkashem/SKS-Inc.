import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ myOrder, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [txId, setTxId] = useState('');

    const price = myOrder.total;
    const { _id, clientName, email } = myOrder;

    useEffect(() => {
        // const url = `http://localhost:5000/create-payment-intent`;
        // const url = `https://agile-badlands-34653.herokuapp.com/create-payment-intent`;
        const url = `https://sks-inc-server.vercel.app/create-payment-intent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json()).then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setSuccess('');

        if (error) {
            setCardError(error.message);
            // console.log('[error]', error);
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm Payment by card
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            setTxId(paymentIntent?.id);
            setSuccess('YeY!!, Yor Payment is Successful. Your Order is now Confirmed');

            //update database by payment status to the order
            if (paymentIntent?.id) {
                const payment = {
                    txId: paymentIntent?.id,
                    client: email
                }
                // const url = `http://localhost:5000/order/${_id}`;
                // const url = `https://agile-badlands-34653.herokuapp.com/order/${_id}`;
                const url = `https://sks-inc-server.vercel.app/order/${_id}`;
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('secretToken')}`
                    },
                    body: JSON.stringify({ payment, myOrder })
                }).then(res => res.json()).then(upRes => {
                    refetch();
                    // console.log(upRes);
                })
            }
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm btn-outline my-10' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-600 font-medium'>{cardError}</p>
            }
            {
                success && <>
                    <p className=' text-success font-medium'>{success}</p>
                    <p>Transection Id is: <span className=' font-bold text-orange-700'>{txId}</span></p>
                </>
            }
        </>
    );
};

export default CheckoutForm;