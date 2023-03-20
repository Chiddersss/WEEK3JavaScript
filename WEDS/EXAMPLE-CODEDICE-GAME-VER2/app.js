const diceImages = [
    "./DICE-GAME IMGS/dice-one.png",
    "./DICE-GAME IMGS/dice-two.png",
    "./DICE-GAME IMGS/dice-three.png",
    "./DICE-GAME IMGS/dice-four.png",
    "./DICE-GAME IMGS/dice-five.png",
    "./DICE-GAME IMGS/dice-six.png"
  ];
  
  let onePlayerScore = 0;
  let twoPlayerScores = [0, 0];
  let currentPlayer = 1;
  let gameMode;
  
  const diceImage = document.getElementById("dice-image");
  const playerScoreSpan = document.getElementById("player-score");
  const opponentScoreSpan = document.getElementById("opponent-score");
  const gameMessage = document.getElementById("game-message");
  const rollButton = document.getElementById("roll-button");
  const resetButton = document.getElementById("reset-button");
  const onePlayerButton = document.getElementById("one-player-button");
  const twoPlayerButton = document.getElementById("two-player-button");
  
  onePlayerButton.addEventListener("click", () => {
    gameMode = "one-player";
    initializeGame();
  });
  
  twoPlayerButton.addEventListener("click", () => {
    gameMode = "two-player";
    initializeGame();
  });
  
  function initializeGame() {
    resetGame();
    rollButton.disabled = false;
    onePlayerButton.disabled = true;
    twoPlayerButton.disabled = true;
  }
  
  function resetGame() {
    onePlayerScore = 0;
    twoPlayerScores = [0, 0];
    currentPlayer = 1;
    playerScoreSpan.innerText = "0";
    opponentScoreSpan.innerText = "0";
    gameMessage.innerText = "";
    diceImage.src = diceImages[0];
    rollButton.innerText = "Roll";
    resetButton.disabled = true;
  }
  
  function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6);
    const newDiceImage = diceImages[randomNumber];
    diceImage.src = newDiceImage;
    return randomNumber + 1;
  }
  
  function updateScore(score) {
    if (gameMode === "one-player") {
      onePlayerScore += score;
      playerScoreSpan.innerText = onePlayerScore;
      if (onePlayerScore >= 20) {
        endGame("You win!");
      } else {
        computerTurn();
      }
    } else {
      twoPlayerScores[currentPlayer - 1] += score;
      playerScoreSpan.innerText = twoPlayerScores[0];
      opponentScoreSpan.innerText = twoPlayerScores[1];
      if (twoPlayerScores[currentPlayer - 1] >= 20) {
        endGame(`Player ${currentPlayer} wins!`);
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        gameMessage.innerText = `Player ${currentPlayer}'s turn`;
      }
    }
  }
  
  function computerTurn() {
    rollButton.disabled = true;
    resetButton.disabled = true;
    const randomDelay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
      const randomRoll = rollDice();
      updateScore(randomRoll);
      rollButton.disabled = false;
      resetButton.disabled = false;
    }, randomDelay);
  }

  function endGame(message) {
    gameMessage.innerText = message;
    rollButton.disabled = true;
    resetButton.disabled = false;
    onePlayerButton.disabled = false;
    twoPlayerButton.disabled = false;
    rollButton.innerText = "Play again";
  }
  
  rollButton.addEventListener("click", () => {
    const roll = rollDice();
    updateScore(roll);
  });
  
  resetButton.addEventListener("click", () => {
    resetGame();
  });
  