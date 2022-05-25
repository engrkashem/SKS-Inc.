import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyOrderTableRow = ({ myOrder, index, setDeleteOrder }) => {
    const { _id, toolName, orderQty, amount, vat, total, paid, txId } = myOrder;

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
                    paid ? <>
                        <p className=' font-bold text-success'>Paid</p>
                        <p className=' font-bold text-orange-700'><small>TxId: {txId}</small></p>

                    </>
                        : <>
                            <button onClick={() => navigate(`payment/${_id}`)} className="btn btn-xs btn-success w-24">PAY</button>
                            <label onClick={() => setDeleteOrder(myOrder)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error w-24">Cancel</label>
                        </>
                }

            </td>
        </tr>
    );
};

export default MyOrderTableRow;