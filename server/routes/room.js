const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// ✅ Create Room with Manual Code
router.post('/create', async (req, res) => {
  const { roomCode, hostName } = req.body;
  try {
    const exists = await Room.findOne({ roomCode });
    if (exists) return res.status(400).json({ message: "Room code already exists" });

    const name = hostName?.trim() || "Host";

    const room = new Room({
      roomCode,
      hostName: name,
      members: [name] // Host is the first member
    });

    await room.save();
    res.json({ message: "Room created", roomCode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Join Room with Code
router.post('/join', async (req, res) => {
  const { roomCode, userName } = req.body;
  try {
    const room = await Room.findOne({ roomCode });
    if (!room) return res.status(404).json({ message: "Room not found" });

    const name = userName?.trim();
    if (!name) return res.status(400).json({ message: "User name is required" });

    // Add only if not already in members
    if (!room.members.includes(name)) {
      room.members.push(name);
      await room.save();
    }

    res.json({ message: "Joined room", roomCode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get Room Info
router.get('/info/:roomCode', async (req, res) => {
  try {
    const room = await Room.findOne({ roomCode: req.params.roomCode });
    if (!room) return res.status(404).json({ message: "Room not found" });

    res.json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
