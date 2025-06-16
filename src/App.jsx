import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AddNotice from './pages/AddNotice';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import { isTokenValid, logout } from './utils/auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const valid = isTokenValid();
    setIsAuthenticated(valid);
    if (!valid && window.location.pathname === '/dashboard') {
      logout(); // redirects to landing page
    }
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <div className="dashboard-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1><u>Community - Noticeboard</u></h1>
                <button onClick={handleLogout} style={{
                  backgroundColor: '#e53935',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Logout
                </button>
              </div>
              <AddNotice setNotices={setNotices} />
              <Home notices={notices} setNotices={setNotices} />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
