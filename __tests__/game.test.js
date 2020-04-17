import { gameBoard } from '../src/dom/game';

const newBoard = gameBoard.board();

// tests empty board
test('it should return an array of empty strings', () => {
  expect(newBoard).toEqual(['', '', '', '', '', '', '', '', '']);
});

// tests checkWins function
test('it returns true for a winning move', () => {
  const testBoard = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(gameBoard.checkWins('Player 1', 'X', testBoard)).toEqual([true, 'Player 1']);
});

// tests checkDraws function
test('it returns true for a full board without winning combinations', () => {
  const testBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
  expect(gameBoard.checkDraws(testBoard)).toEqual(true);
});
