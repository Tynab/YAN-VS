import { FighterState } from "../../constants/fighter.js"

export class Fighter {
    constructor(name, x, y, direction) {
        this.name = name
        this.image = new Image()
        this.frames = new Map()
        this.position = { x, y }
        this.direction = direction
        this.velocity = 0
        this.animationFrame = 0
        this.animationTimer = 0
        this.animations = {}
        this.forwardsStep
        this.backwardsStep

        this.states = {
            [FighterState.FIGHTING_STANCE]: {
                init: this.handleFightingStanceInit.bind(this),
                update: this.handleFightingStanceState.bind(this),
            },
            [FighterState.WALKING_FORWARDS]: {
                init: this.handleWalkingForwardsInit.bind(this),
                update: this.handleWalkingForwardsState.bind(this),
            },
            [FighterState.WALKING_BACKWARDS]: {
                init: this.handleWalkingBackwardsInit.bind(this),
                update: this.handleWalkingBackwardsState.bind(this),
            }
        }

        this.changeState(FighterState.FIGHTING_STANCE)
    }

    changeState(newState) {
        this.currentState = newState
        this.animationFrame = 0
        this.states[this.currentState].init()
    }

    handleFightingStanceInit() {
        this.velocity = 0
    }

    handleFightingStanceState() {

    }

    handleWalkingForwardsInit() {
        this.velocity = 0
        // this.velocity = 150 * this.direction
    }

    handleWalkingForwardsState() {

    }

    handleWalkingBackwardsInit() {
        this.velocity = 0
        // this.velocity = -150 * this.direction
    }

    handleWalkingBackwardsState() {

    }

    updateStageContraints(context) {
        const WIDTH = 50

        if (this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH
        }

        if (this.position.x < WIDTH) {
            this.position.x = WIDTH
        }
    }

    update(time, context) {
        if (time.previous > this.animationTimer + 60) {
            this.animationTimer = time.previous
            this.animationFrame++

            if (this.animationFrame > this.animations[this.currentState].length - 1) {
                this.animationFrame = 0

                if (this.currentState == FighterState.WALKING_FORWARDS) {
                    this.position.x += this.forwardsStep * this.direction
                }

                if (this.currentState == FighterState.WALKING_BACKWARDS) {
                    this.position.x += this.backwardsStep * this.direction
                }
            }
        }

        // this.position.x += this.velocity * time.secondsPassed
        this.states[this.currentState].update(time, context)
        this.updateStageContraints(context)
    }

    drawDebug(context) {
        context.lineWidth = 1
        context.beginPath()
        context.strokeStyle = 'white'
        context.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y))
        context.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y))
        context.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5)
        context.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5)
        context.stroke()
    }

    draw(context) {
        const [[x, y, width, height], [originX, originY]] = this.frames.get(this.animations[this.currentState][this.animationFrame])

        context.scale(this.direction, 1)
        context.drawImage(this.image, x, y, width, height, Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, width, height)
        context.setTransform(1, 0, 0, 1, 0, 0)
        this.drawDebug(context)
    }
}