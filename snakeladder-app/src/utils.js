export function randomNum() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

export function createTiles(position) {
  let tiles = [];
  let tileNum = 1;
  for (let i = 1; i <= 25; i++) {
    // if (position === i) {
    //   tiles.push(
    //     <div className="tile" key={tileNum}>
    //       <div className="tileNumber">{tileNum}</div>
    //       <div className="player-container"></div>
    //       <i className="user icon" style={{ color: "#ff5f5f" }}></i>
    //     </div>
    //   );
    // } else {
    tiles.push(
      <div className="tile" key={tileNum}>
        <div className="tileNumber">{tileNum}</div>
        <div className="player-container"></div>
        {position === i ? (
          <i className="user icon" style={{ color: "#ff5f5f" }}></i>
        ) : null}
      </div>
    );
    // }
    tileNum += 1;
  }
  return tiles;
}
