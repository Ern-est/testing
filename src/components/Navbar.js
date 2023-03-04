import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const handleLogout = () => {
    localStorage.removeItem('username');
    props.setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Meme Generator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {props.loggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add Meme
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-memes">
                    My Memes
                  </Link>
                </li>
              </>
            ) : null}
            <li className="nav-item">
              <Link className="nav-link" to="/all-memes">
                All Memes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {props.loggedIn ? (
              <>
                <li className="nav-item">
                  <span className="navbar-text mx-3">
                    Welcome, {props.username}!
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
