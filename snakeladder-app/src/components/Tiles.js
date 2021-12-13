import React from "react";
import "../sl.css";
import { createTiles } from "../utils";

function Tiles(props) {
  return <div className="board">{createTiles(5)}</div>;
}

export default Tiles;
