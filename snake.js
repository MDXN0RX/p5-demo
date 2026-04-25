const cellSize = 25;
const directionInitial = 'r';

const snakeHead = {
    image: null,
    positionX: 50,
    positionY: 50,
    sizeX: 50,
    sizeY: 50
};

let direction = directionInitial;
function drawHead() {
    image(
        snakeHead.image,
        snakeHead.positionX,
        snakeHead.positionY,
        snakeHead.sizeX,
        snakeHead.sizeY
    );
}

function drawGrid() {
    for (var x = 0; x < canvasX; x = x + cellSize) {
        line(x, 0, x, canvasY);
    }

    for (var y = 0; y < canvasY; y = y + cellSize) {
        line(0, y, canvasX, y);
    }
}

function drawSnake() {
    drawGrid();
    if (direction === 'r') {
        snakeHead.positionX = snakeHead.positionX + cellSize;
    }else if (direction === 'l') {
        snakeHead.positionX -= cellSize;
    }else if (direction === 'u'){
        snakeHead.positionY -= cellSize;
    }else if (direction === 'd'){
        snakeHead.positionY += cellSize;
    }
    drawHead();
}
function keyPressedSnake(){
    if (key === 'w' && direction !== 'd'){
        direction = 'u';

    }else if (key === 's' && direction !=='u'){
        direction = 'd';
    }else if (key === 'a' && direction !=='r'){
        direction = 'l';
    }else if (key === 'd' && direction !=='l')
        direction = 'r';
console.log(key);
console.log(keyCode);
}
function setupSnake() {
    snakeHead.image = loadImage('assets/snake-head.png');
}