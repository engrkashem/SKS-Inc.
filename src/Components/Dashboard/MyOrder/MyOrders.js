import React, { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';
import MyOrderTableRow from './MyOrderTableRow';

export const OrderContext = createContext();

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    //load my order/ order by email
    // const url = `http://localhost:5000/my-order/${user.email}`;
    const url = `https://agile-badlands-34653.herokuapp.com/my-order/${user.email}`;
    const { data: myOrders, isLoading, refetch } = useQuery('myOrder', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        return <Loader></Loader>
    }

    // console.log(myOrders)

    return (
        <OrderContext.Provider value={{ myOrders, refetch }}>
            <div>
                <h2 className=' text-2xl font-semibold'>My Orders: {myOrders.length}</h2>
                <Outlet></Outlet>
                <div className="overflow-x-auto mt-5 " >
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Amout</th>
                                <th>VAT</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((myOrder, index) => <MyOrderTableRow
                                    key={myOrder._id}
                                    myOrder={myOrder}
                                    index={index}
                                ></MyOrderTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </OrderContext.Provider>
    );
};

export default MyOrders;