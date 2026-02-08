import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="easy" targetTime={1} />
        <TimeChallenge title="Not easy" targetTime={5} />
        <TimeChallenge title="getiing tough" targetTime={10} />
        <TimeChallenge title="pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
