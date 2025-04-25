import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function MusicRoom() {
  const { roomCode } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const audioRef = useRef();

  useEffect(() => {
    const storedName = prompt("Enter your name:");
    setUserName(storedName);
    socket.emit("join-room", roomCode, storedName);

    socket.on("play", () => audioRef.current?.play());
    socket.on("pause", () => audioRef.current?.pause());
    socket.on("seek", (time) => {
      if (audioRef.current) audioRef.current.currentTime = time;
    });
    socket.on("chat-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.disconnect();
  }, [roomCode]);

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await axios.get(`http://localhost:5000/api/room/info/${roomCode}`);
      setRoomInfo(res.data);
    };

    fetchRoom();
    const interval = setInterval(fetchRoom, 3000);
    return () => clearInterval(interval);
  }, [roomCode]);

  const handlePlay = () => {
    socket.emit("play", roomCode);
  };

  const handlePause = () => {
    socket.emit("pause", roomCode);
  };

  const handleSeek = () => {
    socket.emit("seek", {
      roomCode,
      time: audioRef.current?.currentTime || 0,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    socket.emit("chat-message", { roomCode, sender: userName, message });
    setMessage("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Room Code: {roomCode}</h2>

      {roomInfo && (
        <>
          <p className="mb-1">
            <strong>Host:</strong> {roomInfo.hostName}
          </p>
          <p className="mb-2">
            <strong>Members:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            {roomInfo.members.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </>
      )}

      <audio
        ref={audioRef}
        src="/song.mp3"
        controls
        className="mb-4"
        onPlay={handlePlay}
        onPause={handlePause}
        onSeeked={handleSeek}
      />

      <div className="space-x-2 mb-4">
        <button onClick={handlePlay} className="px-3 py-1 bg-green-500 text-white rounded">
          Play
        </button>
        <button onClick={handlePause} className="px-3 py-1 bg-yellow-500 text-white rounded">
          Pause
        </button>
        <button onClick={handleSeek} className="px-3 py-1 bg-blue-500 text-white rounded">
          Sync
        </button>
      </div>

      <form onSubmit={sendMessage} className="flex items-center mb-4 gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="border rounded p-2 flex-1"
        />
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
          Send
        </button>
      </form>

      <div className="border rounded p-2 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-1">
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicRoom;
