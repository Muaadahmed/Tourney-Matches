import React from "react"; //optional
import Match from "./Match";

function MatchList(props) {
  const {matchData} = props;
  console.log("matchData ", matchData);
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