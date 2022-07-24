import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => setUsers(data))
    },[users]);


    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user, index)=><UserRow
                           key={user._id}
                           user={user}
                           index={index}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;