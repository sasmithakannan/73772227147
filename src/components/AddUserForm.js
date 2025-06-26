import React, { useState } from 'react';

function AddUserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email };
    onAdd(newUser);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddUserForm;
 
