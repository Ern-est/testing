import React, { useEffect, useState } from 'react';
import MyMemes from './MyMemes';

function AllMemes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // TODO: Fetch all available memes
    const allMemes = [
      { id: 1, title: 'Funny Meme', imageUrl: 'https://example.com/meme1.jpg' },
      { id: 2, title: 'Cute Meme', imageUrl: 'https://example.com/meme2.jpg' },
      { id: 3, title: 'Cool Meme', imageUrl: 'https://example.com/meme3.jpg' },
    ];
    setMemes(allMemes);
  }, []);

  return (
    <div>
      <h2>All Memes</h2>
      {memes.length === 0 ? (
        <p>No memes available yet.</p>
      ) : (
        memes.map((meme) => <   MyMemes key={meme.id} title={meme.title} imageUrl={meme.imageUrl} />)
      )}
    </div>
  );
}

export default AllMemes;
