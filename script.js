import SpaceShip from './SpaceShip.js'


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 1245;
canvas.height = 500;


const player  = new SpaceShip(canvas.width / 2, canvas.height / 2, 12, 90 / 180 * Math.PI, 'white')
console.log(player)
function gameLoop() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
  
  
  player.draw()
}

export default context 
gameLoop()