import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

// Update loop, will redraw the frame when something moves
let lastTime
function update(time) {
    if (lastTime != null) {
        // Update code
        const delta = time - lastTime
        ball.update(delta)
        computerPaddle.update(delta, ball.y)
    }
    lastTime = time
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove" , e => {
    //Converted pixels to percentages
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)