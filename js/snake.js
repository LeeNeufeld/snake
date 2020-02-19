var snake;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
gameDraw();

function gameInitialize() {
  var canvas = document.getElementById("gameArea");
  context = canvas.getContext("2d");
  screenWidth = 800;
  screenHeight = 800;

  canvas.width = screenWidth;
  canvas.height = screenHeight;
}

function gameLoop() {}

function gameDraw() {
  context.fillStyle = "rgb(180, 250, 213)";
  context.fillRect(0, 0, screenWidth, screenHeight);
}
