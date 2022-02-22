const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = 1245
canvas.height = 500

class GameObject {
  constructor(x, y, radio, angle, color){
    this.x = x,
    this.y = y,
    this.radio = radio,
    this. angle = angle,
    this.color = color
  }
  draw() {
    context.fillStyle = this.color
    context.lineWidth = 30 / 20
    context.beginPath()
    context.moveTo(
      this.x + this.radio * Math.cos(this.angle),
      this.y - this.radio * Math.sin(this.angle)
    )
    context.lineTo(
      this.x - this.radio * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) - Math.cos(this.angle))
    )
    context.lineTo(
      this.x + this.radio * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) + Math.cos(this.angle))
    )
    context.fill()
  }
 
}

const player = new GameObject(canvas.width / 2, canvas.height / 2, 10, 90 /180 * Math.PI, 'white')
const player2 = new GameObject(50,  50, 15, 90 /180 * Math.PI, 'black')

function gameSetUp() {
  context.fillStyle = 'dimgray'
  context.fillRect(0, 0, canvas.width, canvas.height)
  player2.draw()
  player.draw()
}


gameSetUp()