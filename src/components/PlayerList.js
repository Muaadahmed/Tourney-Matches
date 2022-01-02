import React from "react"; //optional
import Player from "./Player";
function PlayerList(props) {
  const processedPlayerData = props;
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player {...processedPlayerData}/>
    </section>
  );
}

export default PlayerList;