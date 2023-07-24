import React from "react";
import Die from "./Die.jsx";
import Confetti from "react-confetti";

function Tenzies() {
  const rng = () => Math.floor(6 * Math.random()) + 1;
  const setUp = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: i,
        value: rng(),
        isHeld: false,
      });
    }
    return newDice;
  };

  const [won, setWon] = React.useState(false);
  const [dices, setDices] = React.useState(setUp());

  React.useEffect(() => {
    const num = dices[0].value;
    setWon(
      dices.reduce((acc, cur) => cur.value == num && cur.isHeld && acc, true)
    );
  }, [dices]);

  function refreshDies(): void {
    if (won) {
      setDices(setUp());
      setWon(false);
    }
    setDices((oldDices) =>
      oldDices.map((x) => (x.isHeld ? x : { ...x, value: rng() }))
    );
  }

  function toggleHeld(id: number) {
    setDices((oldDices) =>
      oldDices.map((x) => (x.id === id ? { ...x, isHeld: !x.isHeld } : x))
    );
  }
  return (
    <main className="main">
      <div className="gameContainer">
        {won && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">
          {dices.map((x) => (
            <Die
              key={x.id}
              value={x.value}
              isHeld={x.isHeld}
              toggleHeld={() => toggleHeld(x.id)}
            />
          ))}
        </div>
        <button onClick={refreshDies} id="die-roll">
          <h1>{won ? "New Game" : "Roll"}</h1>
        </button>
      </div>
    </main>
  );
}

export default Tenzies;
