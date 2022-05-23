import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import bg from '../../images/bg-auth.jpg';
import Loader from '../Shared/Loader';
import { toast } from 'react-toastify';
import useSecretToken from '../../hooks/useSecretToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(auth);

    const [token] = useSecretToken(user || gUser);

    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate]);

    if (loading || gLoading || sending) {
        return <Loader></Loader>;
    }

    let errorMessage;
    if (error || gError || rError) {
        errorMessage = <p className='text-rose-500'>{error?.message || gError?.message || rError?.message}</p>;
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        if (user) {
            reset();
        }
    };

    const resetPassword = async () => {
        const email = getValues('email');
        // console.log(email)
        await sendPasswordResetEmail(email);
        if (!rError) {
            toast('Password Reset Email has been sent to your Email.');
        }
    }

    return (
        <div className=' flex h-screen justify-center items-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl glass">
                <div className="card-body items-center">
                    <h2 className="card-title">LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                        message: 'Enter a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.email.message}
                                </span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-rose-500">{errors.email.message}
                                </span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password" className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message: 'Password must contains at least one upper case, one lower case, one digit, one special character and minimum length 8 characters '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                                {errors.password?.type === 'pattern' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                            </label>
                        </div>
                        {/* 
                        At least one upper case English letter, (?=.*?[A-Z])
                        At least one lower case English letter, (?=.*?[a-z])
                        At least one digit, (?=.*?[0-9])
                        At least one special character, (?=.*?[#?!@$%^&*-])
                        Minimum eight in length .{8,} (with the anchors) 
                        */}
                        <input className='btn btn-outline btn-secondary w-1/2 mx-auto block' type="submit" value='LOGIN' />
                    </form>
                    {errorMessage}
                    <p className=' font-semibold mt-5'>Forgot Password?<button onClick={resetPassword} className=' text-secondary btn btn-link'> Reset Password</button></p>

                    <p className=' font-semibold mt-5'>New to SKS Inc.? <Link to={'/register'} className=' text-secondary'>Create New Account</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary uppercase">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;