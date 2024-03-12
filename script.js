// define html elements
const board = document.getElementById('game-board');

// game variables
const gridSize = 20
let snake = [{ x: 10, y: 10 }];
let food = generateFood();


// draw game map, snake and food

function draw() {
    board.innerHTML = ' ';
    drawSnake();
    drawFood();
}

// draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });

}

//  create snake or food cube 
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// set position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// draw food

function drawFood() {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

draw();

function generateFood() {
    const x = Math.floor(Math.random() * gridSize + 1);
    const y = Math.floor(Math.random() * gridSize + 1);
    return { x, y };
}

