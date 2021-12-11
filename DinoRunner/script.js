const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const worldELem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale) 

let lastTime
function update(time) {
    // Make the initial timing more consistent
    if(lastTime === null) {
        lastTime = time 
        window.requestAnimationFrame(update)
        return
    }
    const delta = lastTime - time

    lastTime = time
    // Loop 
    window.requestAnimationFrame(update)
}
// Only calls the update fn the next time we update our screen
window.requestAnimationFrame(update)

function setPixelToWorldScale() {
    let worldToPixelScale
    if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT)
    {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldELem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldELem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}