//Variáveis

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";

// Função para criação de background
function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

// Função de criação da cobrinha
function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

//Função início do game
function iniciarJogo() {
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas em X
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;

  //coordenadas em Y
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
