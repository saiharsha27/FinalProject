import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import Reports from './components/Reports';
import API from './api';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await API.get('/auth/verify');
                    setLoggedIn(response.data.valid);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    localStorage.removeItem('token');
                    setLoggedIn(false);
                }
            }
            setLoading(false);
        };

        verifyToken();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            {loggedIn && (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dashboard">S91 App</Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav"
                        >
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
                            <button 
                                className="btn btn-danger" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            )}
            <div className="container mt-4">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            loggedIn ? 
                                <Navigate to="/dashboard" /> : 
                                <Login setLoggedIn={setLoggedIn} />
                        } 
                    />
                    <Route 
                        path="/dashboard" 
                        element={
                            loggedIn ? 
                                <Dashboard /> : 
                                <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/summary" 
                        element={
                            loggedIn ? 
                                <Summary /> : 
                                <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/reports" 
                        element={
                            loggedIn ? 
                                <Reports /> : 
                                <Navigate to="/" />
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;