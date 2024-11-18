import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home/HomePage.js';
import './App.css';
import './home/HomePage.css';

function App() {
  const NavBar = () => {
    return (
      <div id='navbar-cont'>
        <p id='navbar-text-1'> About </p>
        <p id='navbar-text'> Education </p>
        <p id='navbar-text'> Experience </p>
        <p id='navbar-text'> Contact </p>
      </div>
    );
  };

  return (
    <>
      <header></header>
      <NavBar />
      <Router>
        <Routes>
          {/* <Route path="/work_experience">
            <WorkExp />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route> */}
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
