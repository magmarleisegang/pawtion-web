import React from 'react';
import logo from './paws.svg';
import './App.css';
import TestScreen from './TestScreen'
// import PortionList from './portions/PortionList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Pawtion
        </p>
      </header>
      <TestScreen />
    </div>
  );
}

export default App;
