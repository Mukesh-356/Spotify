const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomCode: String,
  hostName: String,
  members: [String]
});

module.exports = mongoose.model('Room', roomSchema);
