import React from 'react';
import { toast } from 'react-toastify';

const AllOrderRow = ({ order, index, refetch, setDeleteOrder }) => {
    const { _id, toolName, email, orderQty, paid, phone, shipped } = order;
    // console.log(toolName, email, orderQty, paid, phone, shipped)

    const handleShipped = () => {
        // const url = `http://localhost:5000/order/${_id}`;
        const url = `https://agile-badlands-34653.herokuapp.com/order/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            }
        }).then(res => res.json()).then(updateCredential => {
            // console.log(updateCredential)
            if (updateCredential.modifiedCount) {
                toast.success('Order Shipped Successfully');
                refetch();
            }
            else {
                toast.error('Sorry!! Oder Shipment unavailable')
            }
        })
    };


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>
                <p>{email}</p>
                <p>{phone}</p>
            </td>
            <td>{orderQty}</td>
            <td>{shipped ? <p className=' text-accent'>Shipped</p> : <p className=' text-error'>Pending</p>}</td>
            <td>
                {
                    paid ?
                        <>
                            <p className=' text-accent font-semibold'>Paid</p>
                            {
                                shipped ? '' : <button onClick={handleShipped} className="btn btn-xs btn-accent">Shipped</button>
                            }
                        </> :
                        <>
                            <p className=' text-error font-semibold'>Unpaid</p>
                            <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error ">Cancel</label>
                        </>

                }
            </td>
        </tr>
    );
};

export default AllOrderRow;