import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [ users, setUsers] = useState ([]);

  const [usersSelected, setUsersSelected] = useState (null)



  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  },[])


  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const selectUser = user => setUsersSelected(user)
  const deselectUser = () =>setUsersSelected(null)

  const removeUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
      .catch(error => console.log(error.response));
  }
  
  return (
    <div className="App container">

      
     <UsersForm 
        getUsers={getUsers} 
        usersSelected= {usersSelected} 
        deselectUser={deselectUser} 
        />
     <UsersList 
        users= {users} 
        selectUser={selectUser}
        removeUser={removeUser}
        />
    </div>
  );
}

export default App;
