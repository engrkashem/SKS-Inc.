import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader></Loader>
    };

    const onSubmit = data => {
        const { review, rating } = data
        const reviewDoc = {
            description: review,
            rating,
            reviewer: user.email
        };
        // const url = `http://localhost:5000/review`;
        const url = `https://agile-badlands-34653.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            },
            body: JSON.stringify(reviewDoc)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                toast.success('Your review is received. Thank Your very Much for your valuable opinoin which will strengthen us in future to run smoothly. Thank you once again...');
                reset();
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-cover h-content" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold leading-snug">Your Opinion is Precious to Us</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Review
                                    </span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your Review here" className="input input-bordered w-full mt-2"
                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.review?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.review.message}
                                    </span>}
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Your Rating
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Rate Us" className="input input-bordered w-full "
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        },
                                        pattern: {
                                            value: /^[1-5]$/,
                                            message: 'Review must be between 1 to 5 '
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.rating.message}
                                    </span>}
                                    {errors.rating?.type === ' pattern' && <span
                                        className="label-text-alt text-rose-500">{errors.rating.message}
                                    </span>}
                                </label>
                            </div>

                            <input className={`btn  btn-info mx-auto block `} type="submit" value='Review Now' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;