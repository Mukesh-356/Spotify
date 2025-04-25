import React from 'react';

function MusicPlayer({ src, title }) {
  return (
    <div>
      <p><strong>{title}</strong></p>
      <audio controls autoPlay>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
