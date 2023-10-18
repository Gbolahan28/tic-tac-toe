const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        Symbol: 'X',
    },
    {
        name: '',
        Symbol: 'O',
    },
];

const playerConfigElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over'); 

const editPlayer1BtnElement = document.getElementById('edit-1');
const editPlayer2BtnElement = document.getElementById('edit-2');
const cancelConfigBtnElement = document.getElementById('cancel-button');
const startGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameBtnElement.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements); {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);