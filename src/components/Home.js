import React from 'react';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to MemeVerse!</h1>
      <span><p>MemeVerse is the ultimate platform for sharing and discovering memes.</p></span>
      <span><p>To get started, please <a href="/register">register</a> or <a href="/login">log in</a>.</p></span>
    </div>
  );
}

export default Home;
