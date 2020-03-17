
import { gameBoard, Player } from './game.js';

const displayController = (() => {
  
  const display = (board) => {
    const divBoard = document.getElementById('board');
    board.map( (element, index) => {
      divBoard.innerHTML += `<div id="${index}">${element}</div>`
    });
  }

  const addPlayers = document.getElementById('add-players');
  const toggleGame = document.getElementById('toggle-game');
  const input = document.getElementById('input');
  const playerNameToggle = document.getElementById('player-1');
  const player2NameToggle = document.getElementById('player-2');

  toggleGame.onclick = () => {
    const boardWrap = document.getElementById('board');
    boardWrap.classList.toggle('d-none');
    input.classList.toggle('d-none');

    if (toggleGame.innerHTML === "Start Game") {
      toggleGame.innerHTML = "New Game";
    } else {
      toggleGame.innerHTML = "Start Game";
    }
  };

  addPlayers.onclick = () => {
    const players = ();

    if(players[0] === '') { players[0] = 'Player X' };
    if(players[1] === '') { players[1] = 'Player O' };
    
    const playerOne = players[0];
    const playerTwo = players[1];
  };

  return { display }
})();



displayController.display(board);

