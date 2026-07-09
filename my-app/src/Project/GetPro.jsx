import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetPro() {
  const [users, setUsers] = useState([]); // Data store karne ke liye

  useEffect(() => {
    // API se users ka data le rahe hain
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // Data ko state mein save kiya
      })
      .catch(error => console.log("Error aaya hai:", error));
  }, []); // [] ka matlab page load hote hi sirf ek baar chalega

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List (Fetched via Axios)</h2>
      <ul>
        {/* Loop chalakar saare users ke naam screen par dikha rahe hain */}
        {users.map(user => (
          <li key={user.id}>{user.name} - ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default GetPro;