/* eslint-disable import/extensions */

import { gameBoard, Player } from './game.js';

const displayController = (() => {
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
  const players = [];

  toggleGame.onclick = () => {
    const boardWrap = document.getElementById('board');
    boardWrap.classList.toggle('d-none');
    input.classList.toggle('d-none');

    gameBoard.play([Player(players[0]), 'X'], [Player(players[1]), 'O']);

    restart.classList.toggle('d-none');
    toggleGame.classList.toggle('d-none');
    document.getElementById('restart-game').classList.add('d-none');
  };

  restart.onclick = () => {
    gameBoard.clearBoard();
    document.getElementById('restart-game').classList.add('d-none');
    playerNames.innerText = `${players[0]} vs ${players[1]}`;
    gameBoard.play([Player(players[0]), 'X'], [Player(players[1]), 'O']);
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
  };

  return { display };
})();

displayController.display(gameBoard.board());
