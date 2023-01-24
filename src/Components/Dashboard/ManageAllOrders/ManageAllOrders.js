import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from '../../Shared/DeleteConfirmModal';
import Loader from '../../Shared/Loader';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    // console.log(deleteOrder)

    // const url = `http://localhost:5000/order`;
    // const url = `https://agile-badlands-34653.herokuapp.com/order`;
    const url = `https://sks-inc-server.vercel.app/order`;
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>
    }

    // console.log(orders)

    return (
        <div>
            <div>
                <h2 className=' text-2xl font-semibold'>Manage All Orders</h2>
                <p className='text-xl font-medium'>Total Orders: {orders.length}</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Client</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <AllOrderRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteOrder={setDeleteOrder}
                                ></AllOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteOrder && <DeleteConfirmModal
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageAllOrders;