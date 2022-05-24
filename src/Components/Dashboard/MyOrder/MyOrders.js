import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    //load my order/ order by email
    // const url = `http://localhost:5000/my-order/${user.email}`;
    const url = `https://agile-badlands-34653.herokuapp.com/my-order/${user.email}`;
    const { data: myOrders, isLoading } = useQuery('myOrder', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        return <Loader></Loader>
    }

    console.log(myOrders)

    return (
        <div>
            <h2 className=' text-2xl font-semibold'>My Orders: {myOrders.length}</h2>
        </div>
    );
};

export default MyOrders;