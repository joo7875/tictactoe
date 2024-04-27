document.addEventListener("DOMContentLoaded", () => {
  const BOARD_SIZE = 3;
  const players = ["Candidate", "Interviewer"];
  const symbols = ["X", "O"];

  let order = -1;
  const boardgame = document.getElementById("board");
  const winner = document.getElementById("winner");
  const reset = document.getElementById("reset");
  reset.addEventListener("click", handleReset);
  const player = document.getElementById("player");
  player.textContent = "Player: " + players[order + 1];

  createBoard();

  function createBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = document.createElement("div");
      row.style.display = "flex";
      for (let j = 0; j < BOARD_SIZE; j++) {
        let cell = document.createElement("div");
        cell.textContent = ".";
        cell.id = String(i) + String(j);
        cell.style.display = "flex";
        cell.style.border = "solid 1px #000000";
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.style.cursor = "pointer";
        cell.addEventListener("click", () => handleClick(i, j));
        row.appendChild(cell);
      }
      boardgame.appendChild(row);
    }
  }

  function handleClick(row, col) {
    const cell = document.getElementById(String(row) + String(col));

    if (cell.textContent === ".") {
      order = Math.floor((order + 1) % 2);
      cell.textContent = symbols[order];
      player.textContent = "Player: " + players[order];

      checkWinner(row, col);
    }
  }

  function checkWinner(row, col) {
    let count = 0;

    // horizontal
    for (let i = 0; i < BOARD_SIZE; i++) {
      let cell = document.getElementById(String(row) + i);
      if (cell.textContent === symbols[order]) count++;
      if (count === BOARD_SIZE) {
        winner.textContent = "Winner: " + players[order];
        player.display = "none";
        reset.style.display = "block";
        // stop click cells
      }
    }

    // vertical
    // diagonal
  }

  function handleReset() {
    reset.style.display = "none";
    winner.textContent = "";
  }
});
