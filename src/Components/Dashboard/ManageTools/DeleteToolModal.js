import React from 'react';

const DeleteToolModal = ({ deleteTool: { _id, name, quantity }, refetch, setDeleteTool }) => {
    const handleDeleteTool = () => {
        // const url = `http://localhost:5000/tool/${_id}`;
        // const url = `https://agile-badlands-34653.herokuapp.com/tool/${_id}`;
        const url = `https://sks-inc-server.vercel.app/tool/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            }
        }).then(res => res.json()).then(data => {
            // console.log(data)
            if (data.deletedCount) {
                setDeleteTool(null);
                refetch();
            }
        })


    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-tool" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are You Sure you Want to Delete  {name} that has {quantity} pcs Stock???</h3>
                    <div className="modal-action">
                        <button onClick={handleDeleteTool} className="btn text-white btn-error">Delete</button>
                        <label htmlFor="delete-confirm-tool" className="btn btn-accent">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteToolModal;