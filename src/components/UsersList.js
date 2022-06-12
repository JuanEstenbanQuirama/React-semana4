import React from 'react';

const UsersList = ({ users, selectUser, removeUser}) => {
    return (
        <ul className='list-group'>
            <h1>UsersList</h1>
            {
                users.map(user =>(
                    <li key={user.id} className='list-group-item'>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <h2>{user.email}</h2>
                        <h2>{user.birthday}</h2>
                        <button onClick={() => selectUser (user) } className='btn btn-warning'>Edit</button>
                        <button onClick={() => removeUser (user.id)}>delete</button>
                        
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;