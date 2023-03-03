import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AddMemeForm from './components/AddMemeForm';
import MyMemes from './components/MyMemes';
import AllMemes from './components/AllMemes';
import SearchForm from './components/SearchForm';
import EditMemeForm from './components/EditMemeForm';
import DeleteMemeButton from './components/DeleteMemeButton';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} username={username} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login">
            <LoginForm setLoggedIn={setLoggedIn} setUsername={setUsername} />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/add">
            <AddMemeForm />
          </Route>
          <Route path="/my-memes">
            <MyMemes />
          </Route>
          <Route path="/all-memes">
            <AllMemes />
          </Route>
          <Route path="/search">
            <SearchForm />
          </Route>
          <Route path="/edit/:id">
            <EditMemeForm />
          </Route>
          <Route path="/delete/:id">
            <DeleteMemeButton />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
