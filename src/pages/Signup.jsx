import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://newnoticeboard-website.onrender.com/api/auth/signup', { email, password });
      alert("Signup successful. Please login.");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
