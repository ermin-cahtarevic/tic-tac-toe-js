const gameBoard = (() => {
  let board =  ['', '', '', '', '', '', '', '', ''];

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

  const checkWins = (move, board) => {
    let response = false;
    winningCombinations.map((combo) => {
      const one = board[combo[0]];
      const two = board[combo[1]];
      const three = board[combo[2]];
      if ((one === move) && (two === move) && (three === move)) {
        response = true;
      }
      return response;
    });
    return response;
  };

  const checkDraws = (board) => {
    let result = false;
    if (board.every((position) => position !== '')) {
      result = true;
    } 
    return result;
  };

  const clearBoard = (board) => {
    board = ['', '', '', '', '', '', '', '', ''];
    return board;
  };


  return {
    board, checkWins, checkDraws, clearBoard,
  };
})();

export { gameBoard };
