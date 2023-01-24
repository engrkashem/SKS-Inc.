import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();

    const imgbbApiKey = `b5ab4d159b3b824c0b81084910924e97`;

    //load user Profile information
    // const url = `http://localhost:5000/user/${user.email}`;
    // const url = `https://agile-badlands-34653.herokuapp.com/user/${user.email}`;
    const url = `https://sks-inc-server.vercel.app/user/${user.email}`;
    const { data: userInfo, isLoading, refetch } = useQuery(['user', user.email], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        return <Loader></Loader>
    };

    const { displayName, email } = user;
    const { education, country, linkedin, city, phone, img } = userInfo;

    const onSubmit = async data => {
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

        const image = data.image[0];
        const { education, city, country, linkedin, phone } = data;
        const formData = new FormData();
        formData.append('image', image);

        fetch(imgUrl, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    //update user to database
                    const img = result.data.url;
                    const user = {
                        education,
                        city,
                        country,
                        linkedin,
                        phone,
                        img
                    };
                    // const url = `https://agile-badlands-34653.herokuapp.com/user/${email}`;
                    const url = `https://sks-inc-server.vercel.app/user/${email}`;
                    fetch(url, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
                        },
                        body: JSON.stringify(user)
                    }).then(res => res.json()).then(updateCredential => {
                        if (updateCredential.modifiedCount) {
                            toast.success('Your Profile Updated Successfully.');
                            reset();
                            refetch();
                        }
                        else {
                            toast.error('Sorry!! Your Profile Update Failed. Try Some time leter.')
                        }
                    })
                }
            })

    };

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full">
                    <div className=' w-36 h-36 rounded-full border border-blue-400 flex flex-col justify-center items-center'>
                        {
                            img ?
                                <img className=' w-full h-full rounded-full' src={img} alt="" />
                                : <>
                                    <p className=' text-center'>Image </p>
                                    <p className=' text-center'>Update</p>
                                    <p className=' text-center'>Your Profile</p>
                                </>
                        }

                    </div>
                    <h1 className="text-3xl font-bold">User Profile</h1>
                    <p className="py-2 font-medium">Name: <span>{displayName}</span></p>
                    <p className="py-2 font-medium">Email: <span>{email}</span></p>
                    <p className="py-2 font-medium">Education: <span>{education}</span></p>
                    <p className="py-2 font-medium">City: <span>{city}</span></p>
                    <p className="py-2 font-medium">Country: <span>{country}</span></p>
                    <p className="py-2 font-medium">Phone Number: <span>{phone}</span></p>
                    <p className="py-2 font-medium">LinkedIn Profile: <a className='btn btn-link' href={linkedin}>{displayName}</a></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full shadow-md p-5  lg:w-full">

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Education
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Highest Education" className="input input-bordered w-full "
                            {...register("education")}
                        />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">City
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="City" className="input input-bordered w-full "
                            {...register("city")}
                        />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Country
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Country" className="input input-bordered w-full "
                            {...register("country")}
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
                            placeholder="Phone" className="input input-bordered w-full "
                            {...register("phone")}
                        />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">LinkedIn Profile
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="LinkedIn Link" className="input input-bordered w-full "
                            {...register("linkedin")}
                        />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span
                                className="label-text">Image
                            </span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full "
                            {...register("image")}
                        />
                    </div>

                    <input className='btn btn-success w-full mx-auto block mt-2' type="submit" value='Update Profile' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;