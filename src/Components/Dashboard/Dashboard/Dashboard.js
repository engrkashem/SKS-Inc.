import React from 'react';
import { Outlet } from 'react-router-dom';
import ActiveLink from '../../Shared/ActiveLink';
import bgMyOrder from '../../../images/bg-myOrder.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar-left" type="checkbox" className="drawer-toggle" />
            <div style={{ backgroundImage: `url(${bgMyOrder})` }} className="drawer-content p-4 bg-cover h-content">
                <h1 className=' text-4xl font-bold py-2'>Your Dashboard</h1>
                {/* <!-- Page content here --> */}
                <label htmlFor="dashboard-sidebar-left" className="btn btn-outline btn-accent drawer-button lg:hidden">Open Side Menu</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar-left" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-slate-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><ActiveLink>My Profile, </ActiveLink></li>
                    {
                        admin ?
                            <>
                                <li className='mt-2'><ActiveLink>Add A Tool,add-tool</ActiveLink></li>
                                <li className='mt-2'><ActiveLink>Make Admin,make-admin</ActiveLink></li>
                                <li className='mt-2'><ActiveLink>Manage Tools,manage-tools</ActiveLink></li>
                                <li className='mt-2'><ActiveLink>Manage All Orders,manage-all-orders</ActiveLink></li>
                            </> :
                            <>
                                <li className='mt-2'><ActiveLink>My Order,my-orders</ActiveLink></li>
                                <li className='mt-2'><ActiveLink>Add A Review,add-review</ActiveLink></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;