import React, { useContext, useState } from 'react';
import { ToolsContext } from '../../../App';
import DeleteToolModal from './DeleteToolModal';
import ManageToolsRow from './ManageToolsRow';

const ManageTools = () => {
    const [deleteTool, setDeleteTool] = useState(null);

    //All Product from server via tools API
    const sharedByToolsContext = useContext(ToolsContext);
    const { tools, refetch } = sharedByToolsContext;

    return (
        <div>
            <div>
                <h2 className=' text-2xl font-semibold'>Manage Tools/Products</h2>
                <p className='text-xl font-medium'>Total Products: {tools.length}</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Min Order Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tools.map((tool, index) => <ManageToolsRow
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteTool={setDeleteTool}
                                ></ManageToolsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteTool && <DeleteToolModal
                    deleteTool={deleteTool}
                    refetch={refetch}
                    setDeleteTool={setDeleteTool}
                ></DeleteToolModal>
            }

        </div>
    );
};

export default ManageTools;