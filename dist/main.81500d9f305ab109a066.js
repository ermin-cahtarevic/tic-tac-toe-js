/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/game.js":
/*!*************************!*\
  !*** ./src/dom/game.js ***!
  \*************************/
/*! exports provided: gameBoard, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoard\", function() { return gameBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nconst gameBoard = (() => {\n  const board = () => ['', '', '', '', '', '', '', '', ''];\n\n  // winning permutations\n  const winningCombinations = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6],\n  ];\n\n  const playerNames = document.getElementById('player-names');\n\n  const checkWins = (player, move) => {\n    let response = false;\n    winningCombinations.map((combo) => {\n      const one = document.getElementById(combo[0]);\n      const two = document.getElementById(combo[1]);\n      const three = document.getElementById(combo[2]);\n\n      if ((one.innerText === move) && (two.innerText === move) && (three.innerText === move)) {\n        response = true;\n        playerNames.innerHTML = `${player.name} wins!`;\n      }\n      return response;\n    });\n\n    return [response, player];\n  };\n\n  const checkDraws = () => {\n    const positions = [];\n    let result = false;\n    document.getElementById('board').querySelectorAll('div').forEach((el) => {\n      positions.push(el.innerText);\n    });\n    if (positions.every((position) => position !== '')) {\n      result = true;\n    } else {\n      result = false;\n    }\n    return result;\n  };\n\n  const play = (player1Array, player2Array) => {\n    const playerOne = player1Array[0];\n    const Xplay = player1Array[1];\n    const playerTwo = player2Array[0];\n    const Oplay = player2Array[1];\n\n    let currentMove = Xplay;\n    let currentPlayer = playerOne;\n    const playBoard = document.getElementById('board');\n    let winner = '';\n\n    // updates the board with players input\n    playBoard.addEventListener('click', function listener(el) {\n      // checks if position is ocupied\n      const element = el;\n      if (element.target.innerText === 'X' || element.target.innerText === 'O') {\n        return;\n      }\n      element.target.innerText = currentMove;\n\n      // checks for winner\n      if (checkWins(currentPlayer, currentMove)[0]) {\n        playerNames.innerHTML = `${currentPlayer} wins!`;\n        playBoard.removeEventListener('click', listener);\n        [winner] = checkWins(currentPlayer, currentMove);\n        document.getElementById('restart-game').classList.remove('d-none');\n        return;\n      }\n\n      if (checkDraws()) {\n        playerNames.innerHTML = \"It's a draw!\";\n        playBoard.removeEventListener('click', listener);\n        document.getElementById('restart-game').classList.remove('d-none');\n      }\n      currentPlayer = (currentPlayer === playerOne ? playerTwo : playerOne);\n      currentMove = (currentMove === Xplay ? Oplay : Xplay);\n    });\n    return winner;\n  };\n\n  const clearBoard = () => {\n    document.getElementById('board').querySelectorAll('div').forEach((element) => {\n      const el = element;\n      el.innerText = '';\n    });\n  };\n\n\n  return {\n    board, play, checkWins, clearBoard,\n  };\n})();\n\nconst Player = (name) => ({ name });\n\n\n\n\n//# sourceURL=webpack:///./src/dom/game.js?");

/***/ }),

/***/ "./src/dom/main.js":
/*!*************************!*\
  !*** ./src/dom/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/dom/game.js\");\n/* eslint-disable import/extensions */\n\n\n\nconst displayController = (() => {\n  const display = (board) => {\n    const divBoard = document.getElementById('board');\n    board.map((element, index) => {\n      divBoard.innerHTML += `<div id=\"${index}\">${element}</div>`;\n      return true;\n    });\n  };\n\n  const toggleGame = document.getElementById('toggle-game');\n  const restart = document.getElementById('restart');\n  const input = document.getElementById('input');\n  const player1NameToggle = document.getElementById('player1-next');\n  const player2NameToggle = document.getElementById('player2-next');\n  const player1Input = document.getElementById('player-1');\n  const player2Input = document.getElementById('player-2');\n  const playerNames = document.getElementById('player-names');\n  const renewGame = document.getElementById('restart-game');\n  const players = [];\n\n  toggleGame.onclick = () => {\n    const boardWrap = document.getElementById('board');\n    boardWrap.classList.toggle('d-none');\n    input.classList.toggle('d-none');\n\n    _game_js__WEBPACK_IMPORTED_MODULE_0__[\"gameBoard\"].play([Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(players[0]), 'X'], [Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(players[1]), 'O']);\n\n    restart.classList.toggle('d-none');\n    toggleGame.classList.toggle('d-none');\n    document.getElementById('restart-game').classList.add('d-none');\n  };\n\n  restart.onclick = () => {\n    _game_js__WEBPACK_IMPORTED_MODULE_0__[\"gameBoard\"].clearBoard();\n    document.getElementById('restart-game').classList.add('d-none');\n    playerNames.innerText = `${players[0]} vs ${players[1]}`;\n    _game_js__WEBPACK_IMPORTED_MODULE_0__[\"gameBoard\"].play([Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(players[0]), 'X'], [Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"Player\"])(players[1]), 'O']);\n  };\n\n  renewGame.onclick = () => {\n    window.location.reload(true);\n  };\n\n\n  player1NameToggle.onclick = () => {\n    let player1 = document.getElementById('name1').value;\n    if (player1 === '') { player1 = 'Player X'; }\n    players.push(player1);\n    player1Input.classList.toggle('d-none');\n    player2Input.classList.toggle('d-none');\n  };\n\n  player2NameToggle.onclick = () => {\n    let player2 = document.getElementById('name2').value;\n    if (player2 === '') { player2 = 'Player O'; }\n    players.push(player2);\n    player2Input.classList.toggle('d-none');\n    toggleGame.classList.toggle('d-none');\n    playerNames.innerHTML = `\n      ${players[0]} vs ${players[1]}`;\n  };\n\n  return { display };\n})();\n\ndisplayController.display(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"gameBoard\"].board());\n\n\n//# sourceURL=webpack:///./src/dom/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/main */ \"./src/dom/main.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });