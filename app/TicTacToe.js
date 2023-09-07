"use client";
import { useState } from "react";
import TicTacToeBlock from "./TicTacToeBlock";
import { blocks } from "./block";

function TicTacToe(props) {
  const squares = blocks;
  const squareElements = squares.map((square) => (
    <TicTacToeBlock key={square.id} id={square.id} />
  ));
  return <div className="block--container">{squareElements}</div>;
}

export default TicTacToe;
