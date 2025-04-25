import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to MusicRoom</h1>
      <button onClick={() => navigate('/login')} className="px-4 py-2 bg-blue-500 text-white m-2 rounded">Login</button>
      <button onClick={() => navigate('/register')} className="px-4 py-2 bg-green-500 text-white m-2 rounded">Register</button>
    </div>
  );
}

export default Main;
