/* eslint-disable import/extensions */

import { gameBoard, Player } from './game.js';

const displayController = (() => {
  let board = gameBoard.board;
   
  const display = (board) => {
    const divBoard = document.getElementById('board');
    board.map((element, index) => {
      divBoard.innerHTML += `<div id="${index}">${element}</div>`;
      return true;
    });
  };

  const toggleGame = document.getElementById('toggle-game');
  const restart = document.getElementById('restart');
  const input = document.getElementById('input');
  const player1NameToggle = document.getElementById('player1-next');
  const player2NameToggle = document.getElementById('player2-next');
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const playerNames = document.getElementById('player-names');
  const renewGame = document.getElementById('restart-game');
  const playBoard = document.getElementById('board');
  const players = [];

  toggleGame.onclick = () => {
    const boardWrap = document.getElementById('board');
    boardWrap.classList.toggle('d-none');
    input.classList.toggle('d-none');

    restart.classList.toggle('d-none');
    toggleGame.classList.toggle('d-none');
    document.getElementById('restart-game').classList.add('d-none');
  };

  restart.onclick = () => {
    document.getElementById('board').querySelectorAll('div').forEach((element) => {
      const el = element;
      el.innerText = '';
    });
    
    board = gameBoard.clearBoard(board);
    document.getElementById('restart-game').classList.add('d-none');
    play();
    playerNames.innerText = `${players[0]} vs ${players[1]}`;
  };

  renewGame.onclick = () => {
    window.location.reload(true);
  };


  player1NameToggle.onclick = () => {
    let player1 = document.getElementById('name1').value;
    if (player1 === '') { player1 = 'Player X'; }
    players.push(player1);
    player1Input.classList.toggle('d-none');
    player2Input.classList.toggle('d-none');
  };

  player2NameToggle.onclick = () => {
    let player2 = document.getElementById('name2').value;
    if (player2 === '') { player2 = 'Player O'; }
    players.push(player2);
    player2Input.classList.toggle('d-none');
    toggleGame.classList.toggle('d-none');
    playerNames.innerHTML = `
      ${players[0]} vs ${players[1]}`;
    play();
  };

  
  const play = () => {
    let currentMove = 'X';
    let currentPlayer = players[0];
    // updates the board with players input
    playBoard.addEventListener('click', function listener(element) {
      const playerOne = players[0];
      const playerTwo = players[1];
      
      // checks if position is ocupied
      if (element.target.innerText === 'X' || element.target.innerText === 'O') {
        return;
      }
      element.target.innerText = currentMove;
      board[element.target.id] = currentMove;

      // checks for winner
      if (gameBoard.checkWins(currentMove, board)) {
        playBoard.removeEventListener('click', listener);
        playerNames.innerHTML = `${currentPlayer} wins!`;
        document.getElementById('restart-game').classList.remove('d-none');
        return;
      }

      if (gameBoard.checkDraws(board)) {
        playerNames.innerHTML = "It's a draw!";
        playBoard.removeEventListener('click', listener);
        document.getElementById('restart-game').classList.remove('d-none');
      }

      currentPlayer = (currentPlayer === playerOne ? playerTwo : playerOne);
      currentMove = (currentMove === 'X' ? 'O' : 'X');
    });
  }

  return { display };
})();

displayController.display(gameBoard.board);
