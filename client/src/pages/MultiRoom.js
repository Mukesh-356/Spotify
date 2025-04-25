import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MultiRoom() {
  const { roomCode } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);

  // 🔁 This function can now be used by useEffect and button
  const fetchRoom = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/room/info/${roomCode}`);
      setRoomInfo(res.data);
    } catch (err) {
      console.error("Failed to fetch room info:", err);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, [roomCode]);

  return (
    <div>
      <h2>Room Code: {roomCode}</h2>
      {roomInfo && (
        <div>
          <p><strong>Host:</strong> {roomInfo.hostName}</p>
          <p><strong>Members:</strong></p>
          <ul>
            {roomInfo.members.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>

          {/* 🔁 This will manually fetch updated members */}
          <button onClick={fetchRoom}>Refresh Members</button>
        </div>
      )}
    </div>
  );
}

export default MultiRoom;
