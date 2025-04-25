import React, { useState } from 'react';
import songs from '../data/songs';
import MusicPlayer from '../components/MusicPlayer';
import TicTacToe from '../components/TicTacToe';

function SinglePlayerPage() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>🎧 Single User Music Player + Game</h2>

      <div style={{ display: 'flex', gap: 40 }}>
        {/* Song list */}
        <div>
          <h3>Songs List</h3>
          <ul>
            {songs.map((song, index) => (
              <li key={index}>
                <button onClick={() => setSelectedSong(song)}>
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Music Player */}
        <div>
          <h3>Now Playing</h3>
          {selectedSong ? (
            <MusicPlayer src={selectedSong.url} title={selectedSong.title} />
          ) : (
            <p>Select a song to play</p>
          )}
        </div>

        {/* Mini Game */}
        <div>
          <h3>Mini Game</h3>
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}

export default SinglePlayerPage;
