import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import logo from './assets/logo.png';

function Dashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const API_URL = 'http://localhost:5000/users';

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);

  const addUser = user => {
    user.role = 'Member';
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
    <div className="app">
      <button onClick={onLogout} className="logout-btn">Logout</button>
      <img src={logo} alt="Logo" className="dashboard-logo" />

      <h2 className="title">User Dashboard</h2>
      <p className="subtitle">Add, manage, and monitor all users from here.</p>

      <div className="stats">
        <div><strong>Total Users:</strong> {users.length}</div>
        <div><strong>New this week:</strong> 3</div>
        <div><strong>Active:</strong> {users.length - 1}</div>
      </div>

      <AddUserForm onAdd={addUser} />

      <div className="user-section">
        <h3></h3>
        <UserList users={users} onDelete={deleteUser} />
      </div>

      <div className="activity-logs">
        <h4>📜 Activity Logs</h4>
        <ul>
          <li>User <strong>'nila'</strong> added at 10:30 AM</li>
          <li>User <strong>'sasmitha'</strong> last login at 9:00 AM</li>
          <li>Admin updated dashboard at 12:15 PM</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
