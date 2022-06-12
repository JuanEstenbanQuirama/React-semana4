import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ( { getUsers, usersSelected, deselectUser  }) => {

    const [ first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmal] = useState("");
    const [ birthday, setBirthday] = useState("");
    const [ password, setPassword] = useState("");

    useEffect(() => {
        if(usersSelected !== null){
            setFirst_Name(usersSelected.first_name)
            setLast_Name(usersSelected.last_name)
            setEmal(usersSelected.email)
            setBirthday(usersSelected.birthday)
            setPassword(usersSelected.password)
        } else {
            setFirst_Name("")
            setLast_Name("")
            setEmal("")
            setBirthday("")
            setPassword("")
        }
    },[usersSelected])

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday
        }
        if(usersSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${usersSelected.id}/`, user)
                .then(() => {
                    getUsers()
                    deselectUser()

                })
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => getUsers())
                .catch(error => console.log(error.response));
        }
    }
 
    return (
        <form onSubmit={submit} className="mb-5">
           
            <div className="mb-3  ">
                <label htmlFor="firstName" className="form-label">
                    First Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="firstName"
                    onChange={e => setFirst_Name(e.target.value)} 
                    value={first_name}
                />
            </div>
            <div className="mb-3 ">
                <label htmlFor="lastName" className="form-label">
                Last Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastNamee"
                    onChange={e => setLast_Name(e.target.value)} 
                    value={last_name}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="emal" 
                    aria-describedby="emailHelp"
                    onChange={e => setEmal(e.target.value)} 
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password1" className="form-label">
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password1"
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                    Birthday
                </label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="birthday" 
                    onChange={e => setBirthday(e.target.value)} 
                    value={birthday}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        
        </form>
    );
};

export default UsersForm;

// min 44
