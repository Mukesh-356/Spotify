const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const roomRoutes = require('./routes/room');
app.use('/api/room', roomRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    http.createServer(app).listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB error:", err));
