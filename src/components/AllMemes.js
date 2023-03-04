import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllMemes() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get('https://api.example.com/memes');
        setMemes(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch memes');
        setLoading(false);
      }
    };
    fetchMemes();
  }, []);

  if (loading) {
    return <div>Loading memes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Memes</h1>
      {memes.length === 0 && <div>No memes found</div>}
      {memes.length > 0 && (
        <ul>
          {memes.map((meme) => (
            <li key={meme.id}>
              <Link to={`/edit/${meme.id}`}>{meme.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllMemes;
