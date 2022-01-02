import React from "react";
import Player from "./Player";
function PlayerList(props) {
  const {playerData} = props;
  const playerList = playerData.map(player => {
    return <Player key={player.gamerTag} {...player}/>
  });
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {playerList}
    </section>
  );
}

export default PlayerList;