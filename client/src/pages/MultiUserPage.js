import React from 'react';
import { useNavigate } from 'react-router-dom';

function MultiUserPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>👥 Multi User Mode</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        <button onClick={() => navigate('/create-room')}>➕ Create Room</button>
        <button onClick={() => navigate('/join-room')}>🔑 Join Room</button>
      </div>
    </div>
  );
}

export default MultiUserPage;
