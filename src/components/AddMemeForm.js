import React, { useState } from 'react';

const AddMemeForm = ({ onAddMeme }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newMeme = { title, url, caption };

    fetch('http://localhost:9292/api/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMeme),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        onAddMeme(data);
      })
      .catch(error => {
        console.error(error);
      });

    setTitle('');
    setUrl('');
    setCaption('');
  };

  return (
    <form className="add-meme-form" onSubmit={handleSubmit}>
      <h2>Add a new meme</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">Image URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={event => setUrl(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          id="caption"
          value={caption}
          onChange={event => setCaption(event.target.value)}
          required
        />
      </div>
      <button type="submit">Add Meme</button>
    </form>
  );
};

export default AddMemeForm;
