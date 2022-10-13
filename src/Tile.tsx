import React from 'react';
import logo from './logo.svg';
import './Tile.css';

function Tile() {
  return (
    <div className="tile">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Tile;
