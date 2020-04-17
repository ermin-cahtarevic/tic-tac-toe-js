const gameBoard = (() => {
  const board = () => ['', '', '', '', '', '', '', '', ''];

  // winning permutations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const playerNames = document.getElementById('player-names');

  const checkWins = (player, move) => {
    let response = false;
    winningCombinations.map((combo) => {
      const one = document.getElementById(combo[0]);
      const two = document.getElementById(combo[1]);
      const three = document.getElementById(combo[2]);

      if ((one.innerText === move) && (two.innerText === move) && (three.innerText === move)) {
        response = true;
        playerNames.innerHTML = `${player.name} wins!`;
      }
      return response;
    });

    return [response, player];
  };

  const checkDraws = () => {
    const positions = [];
    let result = false;
    document.getElementById('board').querySelectorAll('div').forEach((el) => {
      positions.push(el.innerText);
    });
    if (positions.every((position) => position !== '')) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  const play = (player1Array, player2Array) => {
    const playerOne = player1Array[0];
    const Xplay = player1Array[1];
    const playerTwo = player2Array[0];
    const Oplay = player2Array[1];

    let currentMove = Xplay;
    let currentPlayer = playerOne;
    const playBoard = document.getElementById('board');
    let winner = '';

    // updates the board with players input
    playBoard.addEventListener('click', function listener(el) {
      // checks if position is ocupied
      const element = el;
      if (element.target.innerText === 'X' || element.target.innerText === 'O') {
        return;
      }
      element.target.innerText = currentMove;

      // checks for winner
      if (checkWins(currentPlayer, currentMove)[0]) {
        playerNames.innerHTML = `${currentPlayer} wins!`;
        playBoard.removeEventListener('click', listener);
        [winner] = checkWins(currentPlayer, currentMove);
        document.getElementById('restart-game').classList.remove('d-none');
        return;
      }

      if (checkDraws()) {
        playerNames.innerHTML = "It's a draw!";
        playBoard.removeEventListener('click', listener);
        document.getElementById('restart-game').classList.remove('d-none');
      }
      currentPlayer = (currentPlayer === playerOne ? playerTwo : playerOne);
      currentMove = (currentMove === Xplay ? Oplay : Xplay);
    });
    return winner;
  };

  const clearBoard = () => {
    document.getElementById('board').querySelectorAll('div').forEach((element) => {
      const el = element;
      el.innerText = '';
    });
  };


  return {
    board, play, checkWins, clearBoard,
  };
})();

const Player = (name) => ({ name });

export { gameBoard, Player };
