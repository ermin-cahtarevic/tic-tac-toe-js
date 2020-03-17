
import { gameBoard, Player } from './game.js';

const displayController = (() => {
  
  const display = (board) => {
    const divBoard = document.getElementById('board');
    board.map( (element, index) => {
      divBoard.innerHTML += `<div id="${index}">${element}</div>`
    });
  }

  const toggleGame = document.getElementById('toggle-game');
  const input = document.getElementById('input');
  const player1NameToggle = document.getElementById('player1-next');
  const player2NameToggle = document.getElementById('player2-next');
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const playerNames = document.getElementById('player-names');

  toggleGame.onclick = () => {
    const boardWrap = document.getElementById('board');
    boardWrap.classList.toggle('d-none');
    input.classList.toggle('d-none');

    if (toggleGame.innerHTML === "Start Game") {
      toggleGame.innerHTML = "Restart Game";
    } else {
      toggleGame.innerHTML = "Start Game";
    }
  };

  const players = [];
  let playerOne = {};
  let playerTwo = {};

  player1NameToggle.onclick = () => {
    let player1 = document.getElementById('name1').value;
    if(player1 === '') { player1 = 'Player X' };
    players.push(player1);
    player1Input.classList.toggle('d-none');
    player2Input.classList.toggle('d-none');
    playerOne = Player(players[0]);
  };

  player2NameToggle.onclick = () => {
    let player2 = document.getElementById('name2').value;
    if(player2 === '') { player2 = 'Player O' };
    players.push(player2);
    player2Input.classList.toggle('d-none');
    toggleGame.classList.toggle('d-none');
    playerNames.innerHTML = `
      ${players[0]} vs ${players[1]}`;
    playerTwo = Player(players[1]);
  };
  

  return { display }
})();



displayController.display(gameBoard.board());

