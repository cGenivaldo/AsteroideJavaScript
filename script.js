// Game setUp
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 1245;
canvas.height = 500;

function gameSetUp() {
  requestAnimationFrame(gameSetUp);
  context.fillStyle = 'dimgray';
  context.fillRect(0, 0, canvas.width, canvas.height);
  player2.draw();
  player.draw();
  movimentacaoPlayer();
  playerAround();
}

// Variáveis de movimentação do player
const velocidade = 3;
const asceleracao = 0.1;
const desaceleracao = 30;

class GameObject {
  constructor(x, y, radio, angle, color, spin, moving) {
    (this.x = x),
      (this.y = y),
      (this.radio = radio),
      (this.angle = angle),
      (this.color = color),
      (this.spin = spin),
      (this.moving = moving),
      (this.move = {
        x: 0,
        y: 0,
      });
  }
  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(
      this.x + this.radio * Math.cos(this.angle),
      this.y - this.radio * Math.sin(this.angle)
    );
    context.lineTo(
      this.x - this.radio * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) - Math.cos(this.angle))
    );
    context.lineTo(
      this.x - this.radio * (Math.cos(this.angle) - Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) + Math.cos(this.angle))
    );
    context.fill();
  }
}
// Player  Atributos
const player = new GameObject(
  canvas.width / 2,
  canvas.height / 2,
  10,
  (90 / 180) * Math.PI,
  'black',
  0,
  false
);
//Player 2 Atributos
const player2 = new GameObject(50, 50, 15, (90 / 180) * Math.PI, 'white');

// Eventos de controles do player 1
document.addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      player.spin = (velocidade / 180) * Math.PI;
      break;
    case 87:
      player.moving = true;
      break;
    case 68:
      player.spin = (-velocidade / 180) * Math.PI;
      break;
  }
});

document.addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      player.spin = 0;
      break;
    case 87:
      player.moving = false;
      break;
    case 68:
      player.spin = 0;
      break;
  }
});

// Movimentação do player
function movimentacaoPlayer() {
  player.angle += player.spin;

  if (player.moving) {
    thrusher();
    player.move.x += asceleracao * Math.cos(player.angle);
    player.move.y -= asceleracao * Math.sin(player.angle);
  } else {
    player.move.x -= player.move.x / desaceleracao;
    player.move.y -= player.move.y / desaceleracao;
  }

  player.x += player.move.x;
  player.y += player.move.y;
}

// Fazendo com que o player não desapareça quando atigir os limites da canvas
function playerAround() {
  if (player.x < 0 - player.radio) {
    player.x = canvas.width + player.radio;
  } else if (player.x > canvas.width + player.radio) {
    player.x = 0 - player.radio;
  }
  if (player.y < 0 - player.radio) {
    player.y = canvas.height + player.radio;
  } else if (player.y > canvas.height + player.radio) {
    player.y = 0 - player.radio;
  }
}

// Colocando um propulsor na nave
function thrusher() {
  context.strokeStyle = 'orange';
  context.fillStyle = 'red';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(
    player.x -
      player.radio *
        ((2 / 3) * Math.cos(player.angle) + 0.5 * Math.sin(player.angle)),
    player.y +
      player.radio *
        ((2 / 3) * Math.sin(player.angle) - 0.5 * Math.cos(player.angle))
  );
  context.lineTo(
    player.x - ((player.radio * 8) / 3) * Math.cos(player.angle),
    player.y + ((player.radio * 8) / 3) * Math.sin(player.angle)
  );
  context.lineTo(
    player.x -
      player.radio *
        ((2 / 3) * Math.cos(player.angle) - 0.5 * Math.sin(player.angle)),
    player.y +
      player.radio *
        ((2 / 3) * Math.sin(player.angle) + 0.5 * Math.cos(player.angle))
  );
  context.closePath();
  context.stroke();
  context.fill();
}

gameSetUp();
