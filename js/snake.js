var snake;
var snakeLength;
var snakeSize;

var food;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
setInterval(gameLoop, 1000 / 30);

function gameInitialize() {
  var canvas = document.getElementById("gameArea");
  context = canvas.getContext("2d");
  screenWidth = 800;
  screenHeight = 800;

  canvas.width = screenWidth;
  canvas.height = screenHeight;
}

function gameLoop() {
  gameDraw();
  snakeUpdate();
  snakeDraw();
}

function gameDraw() {
  context.fillStyle = "blue";
  context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize() {
  snake = [];
  snakeLength = 5;
  snakeSize = 16;

  for (var index = snakeLength - 1; index >= 0; index--) {
    snake.push({
      x: index,
      y: 0
    });
  }
}

function snakeDraw() {
  for (var index = 0; index < snake.length; index++) {
    context.fillStyle = "white";
    context.fillRect(
      snake[index].x * snakeSize,
      snake[index].y * snakeSize,
      snakeSize,
      snakeSize
    );
  }
}

function snakeUpdate() {
  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  snakeX++;

  var snakeTail = snake.pop();
  snakeTail.x = snakeX;
  snakeTail.y = snakeY;
  snake.unshift(snakeTail);
}

function foodInitialize() {}

function foodDraw() {}
