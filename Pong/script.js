import Ball from './Ball.js'

const ball = new Ball(document.getElementById("ball"))

// Update loop, will redraw the frame when something moves
let lastTime
function update(time) {
    if (lastTime != null) {
        // Update code
        const delta = time - lastTime
        ball.update(delta)
    }
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)