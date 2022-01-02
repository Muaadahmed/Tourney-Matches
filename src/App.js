import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import {preparePlayerData, addWinsToPlayers} from './helpers/playerHelpers'

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  const onePlayer = parsedPlayerData[0];
  const oneMatch = matchData[0]
  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList {...onePlayer} />
      <MatchList {...oneMatch}/>
    </div>
  );
}

export default App;
