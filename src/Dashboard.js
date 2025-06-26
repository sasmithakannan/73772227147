import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import logo from './assets/logo.png';

function Dashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const API_URL = 'http://localhost:5000/users';

  useEffect(() => {
    axios.get(API_URL).then(res => setUsers(res.data)).catch(console.error);
  }, []);

  const addUser = user => {
    axios.post(API_URL, user)
      .then(res => setUsers(prev => [...prev, res.data]))
      .catch(console.error);
  };

  const deleteUser = id => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setUsers(prev => prev.filter(u => u.id !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', margin: '20px' }} />
        <button
          onClick={onLogout}
          style={{
            padding: '10px 20px',
            margin: '20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      <h2 style={{ textAlign: 'center' }}>User Dashboard</h2>
      <p style={{ textAlign: 'center', color: 'gray' }}>
        Add, manage, and monitor all users from here.
      </p>

      <AddUserForm onAdd={addUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}

export default Dashboard;
