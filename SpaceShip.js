import context  from "./script.js";

class SpaceShip {
  constructor(x, y, radio, angle, color){
    this.x = x 
    this.y = y
    this.radio = radio;
    this.angle = angle;
    this.color = color;
  }

  draw() {
    context.fillStyle = this.color
    context.moveTo(
      this.x + this.radio * Math.cos(this.angle),
      this.y - this.radio * Math.sin(this.angle)
    )
    context.lineTo(
      this.x - this.radio * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) - Math.cos(this.angle)),
    )
    context.lineTo(
      this.x + this.radio * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radio * (Math.sin(this.angle) - Math.cos(this.angle)),
    )
    context.fill()
  }
}


  



export default SpaceShip