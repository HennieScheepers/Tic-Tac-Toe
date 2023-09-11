"use client";
import { useState } from "react";
import { blocks } from "./block";
import checkGame from "./helpers";

let round = 0;
function TicTacToeBlock(props) {
  // Initialising game array
  const [gameTracker, setGameTracker] = useState(blocks);

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

      // Updates the symbol based on the round number
      setSymbol(() => {
        const resultSymbol = round % 2 === 0 ? "X" : "O";
        // Updates the gameTracker array
        setGameTracker((prevArray) =>
          prevArray.map((square, index) => {
            const newArr = [];
            if (square.id === props.id) {
              newArr[index] = square.symbol = resultSymbol;
              // Checks if anyone has won the game after move
              if (checkGame(gameTracker) !== undefined) {
                window.alert(checkGame(gameTracker));
              }
            } else {
              newArr[index] = square;
            }
            return newArr;
          })
        );

        // Updates the styles based on the symbol
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
  }
  return (
    <div onClick={handleClick} className="block" style={style}>
      {symbol}
    </div>
  );
}

export default TicTacToeBlock;
