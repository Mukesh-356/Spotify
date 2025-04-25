import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SinglePlayerPage from './pages/SinglePlayerPage';
import MultiUserPage from './pages/MultiUserPage';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import MultiRoom from './pages/MultiRoom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/single" element={<SinglePlayerPage />} />
        <Route path="/multi" element={<MultiUserPage />} />
        <Route path="/create-room" element={<CreateRoom />} />
<Route path="/join-room" element={<JoinRoom />} />
<Route path="/multi/:roomCode" element={<MultiRoom />} />

        
      </Routes>
    </Router>
  );
}

export default App;
