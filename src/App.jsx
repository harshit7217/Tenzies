import { useState, useRe, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Cheer from "./Cheer";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());



  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );
  const check = gameWon ? "New Game" : "Roll Dice";

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  ));

  function rollDice() {
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        })
      );
    }else {
      setDice(generateAllNewDice());
      // Reset the game by generating new dice
    }
  }

  return (
    <main>
      
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        {check}
      </button>
      {gameWon && <Cheer />}
      <div aria-label="polite" >
        {gameWon ? "Congratulations! You won!" : "Keep rolling!"}
      </div>
    </main>
  );
}

export default App;
