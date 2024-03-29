// define html elements
const board = document.getElementById('game-board');

// game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 },];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
let score = document.getElementById('score');
score = 0;
const highscore = document.getElementById('highScore');


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

// draw();

// generate food

function generateFood() {
    const x = Math.floor(Math.random() * gridSize + 1);
    const y = Math.floor(Math.random() * gridSize + 1);
    return { x, y };
}


// moving a snake
function move() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'right':
            head.x++;
            break;
        case 'up':
            head.y--;
            break;
        case 'left':
            head.x--;
            break;
        case 'down':
            head.y++;
            break;
    }
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        score += 1;
        console.log(score)
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            move();
            draw();

        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}

// start game 
function startGame() {
    gameStarted = true;   //keep track of game 
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        // checkCollision();
        draw();
    }, gameSpeedDelay);
}

// key event listener
function handleKeyPress(event) {
    if ((!gameStarted && event.code === 'space') ||
        (!gameStarted && event.key === ' ')) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;

        }
    }
}



document.addEventListener('keydown', handleKeyPress);


// function checkCollision() {
//     const head = snake[0];
//     if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
//         resetGame();
//     }

//     for (let i = 0; i < snake.length; i++) {
//         if (head.x === snake[1].x)
//     }
// }

// function increaseSpeed() {
//     if (gameSpeedDelay > 150) {
//         gameSpeedDelay -= 20;
//     }


// setInterval(() => {
//     move();
//     draw();
// }, 200);