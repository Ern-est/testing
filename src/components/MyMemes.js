import React, { useEffect, useState } from 'react';
import AllMemes from './AllMemes';

function MyMemes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // TODO: Fetch memes added by the current user
    const myMemes = [
      { id: 1, title: 'My First Meme', imageUrl: 'https://example.com/meme1.jpg' },
      { id: 2, title: 'My Second Meme', imageUrl: 'https://example.com/meme2.jpg' },
    ];
    setMemes(myMemes);
  }, []);

  return (
    <div>
      <h2>My Memes</h2>
      {memes.length === 0 ? (
        <p>No memes added yet.</p>
      ) : (
        memes.map((meme) => <AllMemes key={meme.id} title={meme.title} imageUrl={meme.imageUrl} />)
      )}
    </div>
  );
}

export default MyMemes;
