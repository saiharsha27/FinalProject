import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import Reports from './components/Reports';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    };

    return (
        <Router>
            {loggedIn ? (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/dashboard">S91 App</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/summary">Summary</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/reports">Reports</Link>
                      </li>
                    </ul>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </nav>
              
            ) : null}
            <Routes>
                <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Login setLoggedIn={setLoggedIn} />} />
                <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="/summary" element={loggedIn ? <Summary /> : <Navigate to="/" />} />
                <Route path="/reports" element={loggedIn ? <Reports /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
