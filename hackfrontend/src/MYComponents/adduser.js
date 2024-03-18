// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddUser() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
          userName: '',
          mobileNo: '',
          password: '',
          roleId: 1,
          getRole: {
            roleId: 1, // Assuming roleId is initialized to 0 by default
            roleName: 'coco' // Assuming roleName is initialized to an empty string by default
          }
  });

  useEffect(() => {
    // Fetch data from backend API when component mounts
    axios.get('http://localhost:5063/api/User')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

console.log(formData);
    axios.post('http://localhost:5063/api/User', formData)
      .then(response => {
        console.log('User signed up successfully:', response.data);
        // Optionally, update the user list after sign-up
        setUsers([...users, response.data]);
        // Clear form fields after successful sign-up
        setFormData({
         
          email: '',
          userName: '',
          mobileNo: '',
          password: '',
          roleId: 0,
          getRole: {
            roleId: 0, // Assuming roleId is initialized to 0 by default
            roleName: '' // Assuming roleName is initialized to an empty string by default
          }

        });
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.userName}</li>
        ))}
      </ul>
      
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mobile No:
          <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Role ID:
          <select name="getRole" value={formData.roleId} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value={1}>Coco</option>
            <option value="2">Module Router</option>
            <option value="3">Faculty</option>
          </select>
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AddUser;
