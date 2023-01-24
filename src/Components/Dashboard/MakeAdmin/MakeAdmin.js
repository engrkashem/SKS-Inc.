import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader';
import UsersTableRow from './UsersTableRow';

const MakeAdmin = () => {
    //loading all user first to make a user admin
    // const url = `http://localhost:5000/user`;
    // const url = `https://agile-badlands-34653.herokuapp.com/user`;
    const url = `https://sks-inc-server.vercel.app/user`;

    const { data: users, isLoading, refetch } = useQuery('allUsers', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('secretToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <h2 className=' text-2xl font-semibold'>Make a User Admin</h2>
            <p className='text-xl font-medium'>All Users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersTableRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UsersTableRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;