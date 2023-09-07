"use client";
import { useState } from "react";

let round = 0;

function TicTacToeBlock(props) {
  // Initialising game array
  const gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [gameTracker, setGameTracker] = useState(gameArray);

  // Creating state to keep track of symbol
  const [symbol, setSymbol] = useState("");

  // Creating state to keep track of styles
  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "white",
  });
  const [clicked, setClicked] = useState(false);

  // Function to handle the click of the blocks
  function handleClick() {
    // Checks if block has already been clicked
    if (!clicked) {
      setClicked(() => true);

      // Update the symbol based on the round number
      setSymbol(() => {
        const resultSymbol = round % 2 === 0 ? "X" : "O";

        // Updating the game tracker array
        setGameTracker((prevGameTracker) => {
          const newArray = [...prevGameTracker];
          newArray[props.id - 1] = resultSymbol;
          console.log(newArray);
          return newArray;
        });

        // Update the styles based on the symbol
        setStyle((prevStyles) => {
          return {
            ...prevStyles,
            backgroundColor: resultSymbol === "X" ? "#FFD7FA" : "#B0F6FF",
          };
        });
        return resultSymbol;
      });
      // Increments round to keep track of the game
      ++round;
    }
    console.log(gameTracker);
  }
  return (
    <div onClick={handleClick} className="block" style={style}>
      {symbol}
    </div>
  );
}

export default TicTacToeBlock;
