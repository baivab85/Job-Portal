import React, { useState } from 'react';
import './css/AdminLogin.css';

import Main from './Main';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Here you can add your login logic, for example, sending a request to the server to validate credentials
    if (username === 'admin' && password === '1234') {
      // Successful login
      setError('');
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    } else {
      // Failed login
      alert('Invalid username or password');
    }
  };

  // Render another component upon successful login
  if (isLoggedIn) {
    return <Main />;
  }

  return (
    <>
    <div className='ll' style={{backgroundColor:'aqua',height:'800px',width:'100%'}}>
    
    <div className="login-container">
      <h2 className="login-header"><b>ADMIN LOGIN</b></h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
      {error && <div className="error-message">{error}</div>}
    </div>
    </div>
    </>
  );
};



export default AdminLogin;
