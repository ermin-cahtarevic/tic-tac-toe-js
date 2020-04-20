import gameBoard from '../src/dom/game';

describe('tests empty board', () => {
  test('it should return an array of empty strings', () => {
    const newBoard = gameBoard().board;
    expect(newBoard).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});

describe('tests checkWins function', () => {
  test('it returns true for a winning move', () => {
    const newBoard = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(gameBoard().checkWins('X', newBoard)).toEqual(true);
  });
});

describe('tests checkDraws function', () => {
  test('it returns true for a full board without winning combinations', () => {
    const newBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(gameBoard().checkDraws(newBoard)).toEqual(true);
  });
});

describe('tests clearBoard function', () => {
  test('it clears the board', () => {
    const newBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(gameBoard().clearBoard(newBoard)).toEqual(['', '', '', '', '', '', '', '', '']);
  });
});