import { useState } from 'react';
import './App.css';
import Tile from './Tile';

export type TileData = {
  x: number;
  y: number;
  openings: PipeOpenings;
}

/** North, east, south, west 
 * and whether they have a pipe opening or not. */
export type PipeOpenings = {
  n?: boolean;
  e?: boolean;
  s?: boolean;
  w?: boolean;
}

const generateTiles = (width: number, height: number): TileData[] => {
  const tiles: TileData[] = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const openings = generateOpenings();
      tiles.push({
        x, y, openings
      });
    }
  }
  return tiles;
}

const generateOpenings = (): PipeOpenings => {
  const rand = Math.random();
  if (rand < 0.1) {
    return {};
  }

  const openingA = pickASide();
  const openingB = pickASide();
  return {...openingA, ...openingB};
}

const pickASide = (): PipeOpenings => {
  const rand = Math.random();
  if (rand < 0.25) {
    return {n: true};
  }
  else if (rand < 0.5) {
    return {e: true};
  }
  else if (rand < 0.75) {
    return {s: true};
  }
  else {
    return {w: true};
  }
}

const height = 6;
const width = 8;

const initialTiles: TileData[] = generateTiles(width,height);

function App() {
  
  const [tileData, setTiles] = useState(initialTiles);

  const tiles: JSX.Element[] = [];
  
  for (let y = 0; y < height; y++) {
    const row: JSX.Element[] = [];
    for (let x = 0; x < width; x++) {
      const tile = tileData.find(
        tile => tile.x == x && tile.y == y
      );
      
      if (tile) {
        row.push(
          <Tile 
            x={tile.x} 
            y={tile.y}
            openings={tile.openings}/>
        );
      }
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
