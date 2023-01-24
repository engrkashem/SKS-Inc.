import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        // const url = `http://localhost:5000/admin/${email}`;
        // const url = `https://agile-badlands-34653.herokuapp.com/admin/${email}`;
        const url = `https://sks-inc-server.vercel.app/admin/${email}`;

        if (email) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('secretToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false)
                    // console.log(data);
                })
        }

    }, [user])

    return [admin, adminLoading];

}

export default useAdmin;