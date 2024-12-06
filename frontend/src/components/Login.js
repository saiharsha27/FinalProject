import React, { useState } from 'react';
import API from '../api';

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
        } catch {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
  <form className="card p-4 shadow-lg" style={{ width: '300px' }} onSubmit={handleSubmit}>
    <h3 className="text-center mb-4">Login</h3>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input
        id="username"
        className="form-control"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        id="password"
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">Login</button>
  </form>
</div>

    );
};

export default Login;
