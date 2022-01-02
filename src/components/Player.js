import React from "react";

 function Player(props) {
  const {gamerTag, firstName, lastName, wins} = props
  // console.log("player props", props);
  // console.log("gamerTag", gamerTag);
  // console.log("firstname", firstName);
  return(
    <article className="Player">
      <h1>{firstName}<span>{gamerTag}</span>{lastName}</h1>
      {wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {wins === 1 && <h2>Currently at {wins} win</h2>}
      {wins > 1 && <h2>Currently at {wins} wins</h2>}
    </article>
  );
};

export default Player;