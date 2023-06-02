import React from 'react';

const DeleteConfirmModal = ({ deleteOrder: { _id, toolName
    , orderQty, date }, setDeleteOrder, refetch }) => {

    const handleDeleteOrder = () => {
        // const url = `http://localhost:5000/order/${_id}`;
        // const url = `https://agile-badlands-34653.herokuapp.com/order/${_id}`;
        // const url = `https://sks-inc-server.vercel.app/order/${_id}`;
        const url = `https://sks-server.onrender.com/order/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.deletedCount) {
                setDeleteOrder(null);
                refetch();
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are You Sure you Want to Delete Your {orderQty} pcs {toolName} Order that you placed on {date}???</h3>
                    <div className="modal-action">
                        <button onClick={handleDeleteOrder} className="btn text-white btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-accent">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;