import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <Route exact path="/">
      <div className="container mt-4">
        <h1 className="text-center">Welcome to Meme Generator App</h1>
        <p className="text-center">Please register or login to use the app</p>
      </div>
    </Route>
  );
}

export default Home;
