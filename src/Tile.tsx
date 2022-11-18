import { PipeOpenings, TileData } from './App';
import './Tile.css';

function Tile(tile: TileData) {

  const renderPipe = (openings: PipeOpenings) => {
    if (!(openings.n || openings.e || openings.s || openings.w)) {
      return;
    }

    const topOpening = openings.n && <div className="pipe north"></div>;
    const rightOpening = openings.e && <div className="pipe east"></div>;
    const bottomOpening = openings.s && <div className="pipe south"></div>;
    const leftOpening = openings.w && <div className="pipe west"></div>;

    return (
      <div className='pipe-container'>
        <div className="pipe center"></div>
        {topOpening}
        {rightOpening}
        {bottomOpening}
        {leftOpening}
      </div>
    );
  }

  return (
    <div className="tile">
      {renderPipe(tile.openings)}
    </div>
  );
}

export default Tile;
