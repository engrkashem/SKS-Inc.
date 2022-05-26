import React from 'react';

const ManageToolsRow = ({ tool, index, refetch, setDeleteTool }) => {

    const { name, quantity, price, img, moq } = tool;

    return (
        <tr>
            <th>{index + 1}</th>
            <td className=' flex justify-between items-center'>
                <img className='w-12 h-12 rounded-full' src={img} alt="" />
                <p>{name}</p>
            </td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{moq}</td>
            <td><label onClick={() => setDeleteTool(tool)} htmlFor="delete-confirm-tool" className="btn btn-xs btn-error ">Delete</label></td>
        </tr>
    );
};

export default ManageToolsRow;