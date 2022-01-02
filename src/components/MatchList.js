import React from "react";
import Match from "./Match";

function MatchList(props) {
  const {matchData} = props;
  const matchList = matchData.map(match => {
    return <Match key={match.matchNumber} {...match}/>
  });
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matchList}
    </section>
  );
}

export default MatchList;