import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyOrderTableRow = ({ myOrder, index }) => {
    const { _id, toolName, orderQty, amount, vat, total, paid } = myOrder;

    const navigate = useNavigate();

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>{orderQty}</td>
            <td>{amount}</td>
            <td>{vat}</td>
            <td>{total}</td>
            <td className='flex flex-col gap-y-1'>
                {
                    paid ? <p className=' font-bold text-success'>Paid</p>
                        : <>
                            <button onClick={() => navigate(`payment/${_id}`)} className="btn btn-xs btn-success">PAY</button>
                            <button className="btn btn-xs btn-error">Cancel</button>
                        </>
                }

            </td>
        </tr>
    );
};

export default MyOrderTableRow;