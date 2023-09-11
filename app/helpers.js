function checkGame(gameTracker) {
  const condition1 =
    gameTracker[0].symbol !== null &&
    gameTracker[0].symbol === gameTracker[1].symbol &&
    gameTracker[1].symbol === gameTracker[2].symbol;

  const condition2 =
    gameTracker[0].symbol !== null &&
    gameTracker[0].symbol === gameTracker[3].symbol &&
    gameTracker[3].symbol === gameTracker[6].symbol;

  const condition3 =
    gameTracker[1].symbol !== null &&
    gameTracker[1].symbol === gameTracker[4].symbol &&
    gameTracker[4].symbol === gameTracker[7].symbol;

  const condition4 =
    gameTracker[2].symbol !== null &&
    gameTracker[2].symbol === gameTracker[5].symbol &&
    gameTracker[5].symbol === gameTracker[8].symbol;

  const condition5 =
    gameTracker[3].symbol !== null &&
    gameTracker[3].symbol === gameTracker[4].symbol &&
    gameTracker[4].symbol === gameTracker[5].symbol;

  const condition6 =
    gameTracker[6].symbol !== null &&
    gameTracker[6].symbol === gameTracker[7].symbol &&
    gameTracker[7].symbol === gameTracker[8].symbol;

  const condition7 =
    gameTracker[0].symbol !== null &&
    gameTracker[0].symbol === gameTracker[4].symbol &&
    gameTracker[4].symbol === gameTracker[8].symbol;

  const condition8 =
    gameTracker[2].symbol !== null &&
    gameTracker[2].symbol === gameTracker[4].symbol &&
    gameTracker[4].symbol === gameTracker[6].symbol;
  if (condition1) {
    return `${gameTracker[0].symbol} is the winner!`;
  }
  if (condition2) {
    return `${gameTracker[0].symbol} is the winner!`;
  }
  if (condition3) {
    return `${gameTracker[1].symbol} is the winner!`;
  }
  if (condition4) {
    return `${gameTracker[2].symbol} is the winner!`;
  }
  if (condition5) {
    return `${gameTracker[3].symbol} is the winner!`;
  }
  if (condition6) {
    return `${gameTracker[6].symbol} is the winner!`;
  }
  if (condition7) {
    return `${gameTracker[0].symbol} is the winner!`;
  }
  if (condition8) {
    return `${gameTracker[2].symbol} is the winner!`;
  }

  let allValuesFilled = true;
  for (let i = 0; i < gameTracker.length; i++) {
    if (gameTracker[i].symbol === null) {
      allValuesFilled = false;
    }
  }

  if (allValuesFilled) {
    return "It's a draw";
  }
}

export default checkGame;
