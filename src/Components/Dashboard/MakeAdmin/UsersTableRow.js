import React from 'react';
import { toast } from 'react-toastify';

const UsersTableRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        // const url = `http://localhost:5000/user/admin/${email}`;
        const url = `https://agile-badlands-34653.herokuapp.com/user/admin/${email}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('secretToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Sorry, You are not authorised to make a user admin');
            }
            return res.json()
        }).then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(` ${email} made an Admin Successfully`);
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? role : ''}</td>
            <td>
                {
                    (role === 'admin') ?
                        <button className="btn btn-xs btn-error">Remove Admin</button> :
                        <button onClick={makeAdmin} className="btn btn-xs btn-accent">Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default UsersTableRow;