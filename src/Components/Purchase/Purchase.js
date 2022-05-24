import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import bgPurchase from '../../images/bg-purchase.jpg';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: 'onChange' });

    const [user, loading] = useAuthState(auth);
    const { displayName, email } = user;
    // console.log(user)

    const { id } = useParams();
    // const url = `http://localhost:5000/tool/${id}`
    const url = `https://agile-badlands-34653.herokuapp.com/tool/${id}`

    const { data: tool, isLoading } = useQuery(['toolById', user], () => fetch(url).then(res => res.json()));

    const [buttonStatus, setButtonStatus] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading) {
            let defaultValues = {};
            defaultValues.orderQty = tool.moq;
            reset({ ...defaultValues });
        }
    }, [isLoading, tool, reset]);

    if (isLoading || loading) {
        return <Loader></Loader>
    };

    const { name, price, moq, description, quantity } = tool;

    const onSubmit = data => {
        setButtonStatus('active');
        const { orderQty, address, email, name, phone } = data;

        if (parseInt(orderQty) >= parseInt(moq) && parseInt(orderQty) <= parseInt(quantity)) {
            const date = new Date();
            const formatedDate = format(date, 'PP');
            const amount = parseInt(orderQty) * parseInt(price);
            const vat = amount * 0.15;
            const total = (amount + vat).toFixed(2);
            const order = {
                clientName: name,
                email,
                phone,
                address,
                orderQty,
                toolName: tool.name,
                date: formatedDate,
                amount,
                vat,
                total
            }

            //put is use to avoid unwanted click or double click.
            // const url = `http://localhost:5000/order`;
            const url = `https://agile-badlands-34653.herokuapp.com/order`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(orderRes => {
                    if (orderRes.upsertedCount) {
                        toast('Your Order is Placed Successfully. Please Pay to Confirm Order.');
                        navigate('/dashboard/my-orders');
                    }
                    // console.log(orderRes);
                })
        }
        else {
            setButtonStatus('cursor-not-allowed opacity-50');
            toast.error('Your Oder Quantity must be greater than Minimum Order Quantity and less than Available Stock.');
        }

    };

    return (
        <div className="hero min-h-screen bg-cover h-content" style={{ backgroundImage: `url(${bgPurchase})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <p>Minimum Order: <span className=' text-2xl font-semibold'>{moq}</span> pcs./order</p>
                    <p>Stock Available: <span className=' text-2xl font-semibold '>{quantity}</span> pcs.</p>
                    <p>Price: <span className=' text-2xl font-semibold '>$ {price}</span> per pcs.</p>
                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text text-center">Order Quantity
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Quantity" className="input input-bordered w-1/2 lg:w-1/4 "
                            {...register("orderQty")}
                        />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                            <div className="form-control ">
                                <input
                                    type="text"
                                    placeholder="Your Name" className="input input-bordered w-full "
                                    {...register("name")}
                                    value={displayName}
                                    readOnly
                                />
                            </div>
                            <div className="form-control ">
                                <input
                                    type="email"
                                    placeholder="Your Email" className="input input-bordered w-full mt-2"
                                    {...register("email")}
                                    value={email} readOnly
                                />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Phone
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Phone Number" className="input input-bordered w-full "
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.phone.message}
                                    </span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">Address
                                    </span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your Address" className="input input-bordered w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.address.message}
                                    </span>}
                                </label>
                            </div>
                            <input className={`btn  btn-info mx-auto block ${buttonStatus}`} type="submit" value='Confirm & Proceed To Pay' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;