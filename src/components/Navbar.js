import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">Meme Generator</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {loggedIn ? 
            <React.Fragment>
              <li className="nav-item">
                <Link to="/add-meme" className="nav-link">Add Meme</Link>
              </li>
              <li className="nav-item">
                <Link to="/my-memes" className="nav-link">My Memes</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </React.Fragment>
            :
            <React.Fragment>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </React.Fragment>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
