import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home/HomePage.js';
import './App.css';
import './home/HomePage.css';

function App() {
  return (
    <>
      <header></header>
      {/* <NavBar /> */}
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
