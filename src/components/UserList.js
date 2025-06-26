import React from 'react';

function UserList({ users, onDelete }) {
  return (
    <div>
      <h3>User List</h3>

      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map((user, index) => (
          <div className="user-card" key={user.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
  src={`https://picsum.photos/seed/user${index}/45/45`}
  alt="user"
  style={{
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    marginRight: '12px',
    border: '2px solid #007bff',
    objectFit: 'cover'
  }}
/>

              <p><strong>{user.name}</strong> - {user.email}</p>
            </div>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;
