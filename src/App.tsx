import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          ZENIFY | Marketing Made Easy
        </h2>
        <p>Get in contact with us now to learn how we can increase your marketing outreach, social media presence, and customer awareness.</p>
        <a href={"mailto:admin@mystori.app"} className={'App-link'}>admin@mystori.app</a>
        <a href={"tel:+14802782915"} className={'App-link'}>(480) 278-2915</a>
      </header>
    </div>
  );
}

export default App;
