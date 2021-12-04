export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement
        this.reset()
    }

    //Get and Set the XY positions of the ball
    get x(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElement.style.setProperty("--x", value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElement.style.setProperty("--y", value)
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = {x: 0.75, y = 0.5}
    }

    update(delta) {
        this.x = 5;
        this.y = 15;
    }
}