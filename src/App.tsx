import React, { useState } from 'react';
import './App.css';
import Tile from './Tile';

type TileData = {
  x: number;
  y: number;
}

const generateTiles = (width: number, height: number): TileData[] => {
  const tiles: TileData[] = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      tiles.push({x, y});
    }
  }
  return tiles;
}

const initialTiles: TileData[] = generateTiles(4,3);

function App() {
  
  const [tileData, setTiles] = useState(initialTiles);

  const tiles: JSX.Element[] = [];
  
  for (let y = 0; y < tileData.length/4; y++) {
    const row: JSX.Element[] = [];
    for (let x = 0; x < 4; x++) {
      row.push(<Tile/>);
    }
    tiles.push(<div className="row">{row}</div>)
  }

  const newGrid = () => {
    setTiles(generateTiles(4,1));
  } 

  return (
    <div className="App">
      <header className="grid" onClick={newGrid}>
        {tiles}
      </header>
    </div>
  );
}

export default App;
