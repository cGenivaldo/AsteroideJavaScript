const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = 1245
canvas.height = 500


function gameSetUp() {
  context.fillStyle = 'dimgray'
  context.fillRect(0, 0, canvas.width, canvas.height)
}


gameSetUp()