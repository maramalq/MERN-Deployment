import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import Home from './views/Home';
import MainPage from './views/MainPage';
import NewPirate from './views/NewPirate';
import PirateInfo from './views/PirateInfo';

function App() {

  //navigate('/pirates');
  return (
    <div className="App">
      <Router>
        <Home path='/'/>
        <MainPage path="/pirates"/>
        <NewPirate path="/pirate/new"/>
        <PirateInfo path="/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;
