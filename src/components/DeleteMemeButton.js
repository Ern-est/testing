import React from 'react';

const DeleteMemeButton = ({ memeId, onDeleteMeme }) => {
  const handleClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this meme?');
    if (confirmDelete) {
      fetch(`http://localhost:9292/api/memes/${memeId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          onDeleteMeme(memeId);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <button className="delete-meme-btn" onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteMemeButton;
