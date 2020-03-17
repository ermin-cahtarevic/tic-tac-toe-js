import { displayController } from './dom.js'

const Player = name => { name };

const gameBoard = (() => {
  const board = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']];
  displayController.display(board);
})();
