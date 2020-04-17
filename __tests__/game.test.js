import { gameBoard } from '../src/dom/game';

const newBoard = gameBoard.board();

// tests empty board
test('it should return an array of empty strings', () => {
  expect(newBoard).toEqual(['', '', '', '', '', '', '', '', '']);
});

// tests winning combinations
test('it should show a winner if a player wins', () => {
  expect().toMatch();
});

// tests for a draw on the board
test('it should display a draw if no player wins', () => {
  expect().toBe();
});

// tests for display of only the winning player
test('it shoud only display a winner not a loser if a player wins', () => {
  expect().toBe();
});

// tests for turns of play
test('it should allow player only one play on each turn', () => {
  expect().toBe();
});

// tests for cleaning the board
test('it should clear the board during a restart', () => {
  expect().toBe();
});

test('it returns true for a winning move', () => {
  const testBoard = ['X', 'X', 'X', '', '', '', '', '', '']
  expect(gameBoard.checkWins('Player 1', 'X', testBoard)).toEqual([true, 'Player 1']);
});

test('it returns true for a full board without winning combinations', () => {
  const testBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O']
  expect(gameBoard.checkDraws(testBoard)).toEqual(true);
});
