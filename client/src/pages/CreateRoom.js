import React, { useState } from 'react';
import axios from 'axios';

function CreateRoom() {
  const [roomCode, setRoomCode] = useState("");
  const [hostName, setHostName] = useState("");

  const handleCreate = async () => {
    if (!roomCode || !hostName) {
      alert("Please enter both Room Code and Host Name");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/room/create", { roomCode, hostName });
      alert("Room Created!");
      window.location.href = `/multi/${roomCode}`;
    } catch (err) {
      alert(err.response.data.message || "Error creating room");
    }
  };

  return (
    <div>
      <h2>Create Room</h2>
      <input
        placeholder="Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <input
        placeholder="Enter Host Name"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateRoom;
