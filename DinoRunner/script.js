const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const worldELem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)