const gameBoard = (() => {

  const board = () => {
    return ['', '', '', '', '', '', '', '', ''];
  }

  return { board }
})();

const Player = (name) => { 
  return { name } 
};


const Xplay = 'X';
const Oplay = 'O';
let currentPlayer = Xplay;
const playBoard =  document.getElementById('board')

// updates the board with players input
playBoard.addEventListener("click", (element) => {
  if (element.target.innerText ===  'X' || element.target.innerText === 'O') {
    return;
  };
  element.target.innerText = currentPlayer;
  currentPlayer = (currentPlayer ===  Xplay ? Oplay : Xplay);
});


// winning permutations
const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

const checkWins = () => {

};

const checkDraws = () => {

};

const playerTurn = () => {

};

const clearBoard = () => {

};

export { gameBoard, Player };