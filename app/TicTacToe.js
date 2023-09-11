"use client";
import { useState } from "react";
import { blocks } from "./block";
import TicTacToeBlock from "./TicTacToeBlock";

function TicTacToe() {
  const [squares, setSquares] = useState(blocks);
  const squareElements = squares.map((block) => (
    <TicTacToeBlock
      key={block.id}
      id={block.id}
      symbol={block.symbol}
    ></TicTacToeBlock>
  ));

  return <div className="block--container">{squareElements}</div>;
}

export default TicTacToe;
