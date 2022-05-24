import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import bgPurchase from '../../images/bg-purchase.jpg';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);
    const { displayName, email } = user;

    const { id } = useParams();
    const url = `http://localhost:5000/tool/${id}`

    const { data: tool, isLoading } = useQuery('toolById', () => fetch(url).then(res => res.json()));

    useEffect(() => {
        if (!isLoading) {
            let defaultValues = {};
            defaultValues.orderQty = tool.moq;
            reset({ ...defaultValues });
        }
    }, [isLoading, tool, reset])

    if (isLoading || loading) {
        return <Loader></Loader>
    }

    const { name, price, moq, description, quantity } = tool;


    const onSubmit = data => {
        const { orderQty } = data;
        if (orderQty >= moq) {

        }
        else {

        }
        console.log(orderQty)
    }

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
                                    disabled
                                />
                            </div>
                            <div className="form-control ">
                                <input
                                    type="email"
                                    placeholder="Your Email" className="input input-bordered w-full mt-2"
                                    {...register("email")}
                                    value={email} disabled
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
                            <input className='btn  btn-info mx-auto block' type="submit" value='Confirm & Proceed To Pay' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;