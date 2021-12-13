import React from "react";
import Dice from "./dice";
import Player from "./Player";
import Tiles from "./Tiles";
function App() {
  return (
    <div>
      <Tiles>
        <Player />
      </Tiles>
      <Dice />
    </div>
  );
}

export default App;
