const gameBoard = (() => {

  const board = () => {
    return ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  }

  return { board }
})();

const Player = (name) => { 
  return { name } 
};


export { gameBoard, Player };