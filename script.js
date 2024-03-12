// define html elements
const board = document.getElementById('game-board')

// game variables
let snake = [{ x: 10, y: 10 }];


// draw game map, snake and food

function draw() {
    board.innerHTML = '';
    drawSnake()
}

// draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
    });

}

//  create snake or food cube 
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
}