import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Welcome to the Music App 🎶</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
}

export default MainPage;
