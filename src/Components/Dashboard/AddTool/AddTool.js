import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';

const AddTool = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);

    const imgbbApiKey = `b5ab4d159b3b824c0b81084910924e97`;

    if (loading) {
        return <Loader></Loader>
    }

    const onSubmit = async data => {
        const { name, price, quantity, description, email, manufacturer, moq } = data;
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(imgUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    //add new tool to database
                    const img = result.data.url;
                    const tool = {
                        name,
                        price,
                        quantity,
                        moq,
                        description,
                        email,
                        manufacturer,
                        img
                    };
                    // const url = `http://localhost:5000/tool`;
                    // const url = `https://agile-badlands-34653.herokuapp.com/tool`;
                    const url = `https://sks-inc-server.vercel.app/tool`;
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
                        },
                        body: JSON.stringify(tool)
                    }).then(res => res.json()).then(toolCredential => {
                        if (toolCredential.insertedId) {
                            toast.success('A Tool is added to the Product List successfully');
                            reset();
                        }
                    })
                }
            });
    }

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full">

                    <h1 className="text-3xl font-bold">Add A New Tool to Product List</h1>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full shadow-lg p-5">
                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Admin Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email" className="input input-bordered w-full "
                            {...register("email")}
                            value={user.displayName}
                            readOnly
                        />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name" className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.name.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Price
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Price" className="input input-bordered w-full "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.price.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Quantity
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Quantity" className="input input-bordered w-full "
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.quantity.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Minimum Order Quantity
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Minimum Qty" className="input input-bordered w-full "
                            {...register("moq", {
                                required: {
                                    value: true,
                                    message: 'Minimum Qty is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.moq?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.moq.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Description
                            </span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Description" className="input input-bordered w-full "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.description.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Manufacturer
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Manufacturer" className="input input-bordered w-full "
                            {...register("manufacturer", {
                                required: {
                                    value: true,
                                    message: 'Manufacturer is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.manufacturer?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.manufacturer.message}
                            </span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Product Image
                            </span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full "
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.img?.type === 'required' && <span
                                className="label-text-alt text-rose-500">{errors.img.message}
                            </span>}
                        </label>
                    </div>

                    <input className='btn  btn-success  mx-auto block' type="submit" value='Add Product to Database' />
                </form>
            </div>
        </div>
    );
};

export default AddTool;