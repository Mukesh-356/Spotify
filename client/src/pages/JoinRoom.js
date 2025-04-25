import React, { useState } from 'react';
import axios from 'axios';

function JoinRoom() {
  const [roomCode, setRoomCode] = useState("");
  const [userName, setUserName] = useState("");

  const handleJoin = async () => {
    if (!roomCode || !userName) {
      alert("Please enter both Room Code and Your Name");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/room/join", { roomCode, userName });
      alert("Joined Room!");
      window.location.href = `/multi/${roomCode}`;
    } catch (err) {
      alert(err.response.data.message || "Invalid Room Code");
    }
  };

  return (
    <div>
      <h2>Join Room</h2>
      <input
        placeholder="Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <input
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default JoinRoom;
