const displayController = (() => {
  
  const display = (board) => {
    const divBoard = document.getElementById('board');
    board.map( (group, index) => {
      group.map( (element, innerIndex) => {
        divBoard.innerHTML += `<div class="${index}${innerIndex}">${element}</div>`;
      })
    });
  }

  const addPlayers = document.getElementById('add-players');
  const toggleGame = document.getElementById('toggle-game');
  const input = document.getElementById('input');

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

  const getPlayers = () => {
    const playerOne = document.getElementById('name1').value;
    const playerTwo = document.getElementById('name2').value;
  
    return [playerOne, playerTwo];
  }

  addPlayers.onclick = () => {
    const players = getPlayers();

    if(players[0] === '') { players[0] = 'Player X' };
    if(players[1] === '') { players[1] = 'Player O' };

    
    const playerOne = players[0];
    const playerTwo = players[1];
  };

  return { display }
})();

export { displayController };