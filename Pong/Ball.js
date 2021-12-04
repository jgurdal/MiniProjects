const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001
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
 
    rect() {
        return this.ballElement.getBoundingClientRect()
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = {x: 0}
        while (
            Math.abs(this.direction.x) <=.2 || 
            Math.abs(this.direction.x) >= .9
            ) {
            //Determine the direction
            const heading = randomNumberBetween(0, 2* Math.PI)
            //Convert it to a unit vector to get the x and y position
            this.direction = {x: Math.cos(heading), y: Math.sin(heading)}
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        //If the ball hits the top or bottom, bounce off
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1;
        }

        //Just for testing by stopping left and right
        // if (rect.left >= window.innerHeight || rect.right <= 0) {
        //     this.direction.x *= -1;
        // }
    }
}

function randomNumberBetween(min,max) {
    return Math.random() * (max-min) + min
}