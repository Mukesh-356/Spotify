import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome 🎵</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => navigate('/single')}>🎧 Single User</button>
        <button onClick={() => navigate('/multi')}>👥 Multi User</button>
      </div>
    </div>
  );
}

export default Home;
