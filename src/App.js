import React from 'react';
// import rides from './rides.json';
import Navbar from './components/navbar';
import HowToPlayModal from './components/howtoplaymodal';
import Scoreboard from './components/scoreboard';
import './App.css';

function App() {
  return ( 
    <div className="transparent">
     <HowToPlayModal />
     <Navbar />
     <Scoreboard />     
    </div> 
  );
}

export default App;
