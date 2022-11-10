import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addUser, deleteUser, upDateUser } from './redux/slices/UserSlice';

function App() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.users.listUsers)
  const handleAddNewUser = () => {
    if (name && username) {
      dispatch(addUser({
        id: listUsers.length === 0 ? 1 : listUsers[listUsers.length - 1].id + 1,
        name: name,
        username: username
      }))
    }
  }
  return (
    <div className="App">
      <div className='addUser' style={{ margin: '30px' }}>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Name...' />
        <input value={username} onChange={event => setUsername(event.target.value)} type="text" placeholder='Username...' />
        <button onClick={handleAddNewUser}>Add User</button>
      </div>
      <div className='displayUsers'>
        {
          listUsers && listUsers.length > 0
            ?
            <>
              {listUsers.map((item, index) => {
                return (
                  <div key={index} className='user' style={{ border: '1px solid #000', margin: '20px auto ', width: '500px', padding: '20px' }}>
                    <h2>{item.name}</h2>
                    <h2>{item.username}</h2>
                    <input onChange={(event) => setNewUsername(event.target.value)} type="text" placeholder='New username...' />
                    <button onClick={() => dispatch(upDateUser({ id: item.id, newUsername: newUsername }))}>Update Username</button>
                    <button onClick={() => dispatch(deleteUser(item.id))}>Delete User</button>
                  </div>
                )
              })}
            </>
            :
            <>
              No users
            </>

        }
      </div>
    </div>
  );
}

export default App;
