import { FighterDirection, FighterState } from "../../constants/fighter.js"
import { STAGE_FLOOR } from "../../constants/stage.js"

export class Fighter {
    constructor(name, x, y, direction) {
        this.name = name
        this.position = { x, y }
        this.velocity = { x: 0, y: 0 }
        this.initialVelocity = {}
        this.direction = direction
        this.gravity = 0
        this.frames = new Map()
        this.animationFrame = 0
        this.animationTimer = 0
        this.animations = {}
        this.image = new Image()
        this.width = 0
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
            [FighterState.STOMPING_FORWARDS]: {
                init: this.handleStompingForwardsInit.bind(this),
                update: this.handleStompingForwardsState.bind(this),
            },
            [FighterState.WALKING_BACKWARDS]: {
                init: this.handleWalkingBackwardsInit.bind(this),
                update: this.handleWalkingBackwardsState.bind(this),
            },
            [FighterState.STOMPING_BACKWARDS]: {
                init: this.handleStompingBackwardsInit.bind(this),
                update: this.handleStompingBackwardsState.bind(this),
            },
            [FighterState.JUMP_FORWARDS]: {
                init: this.handleJumpForwardsInit.bind(this),
                update: this.handleJumpForwardsState.bind(this),
            },
            [FighterState.LANDING_JUMP]: {
                init: this.handleLandingJumpInit.bind(this),
                update: this.handleLandingJumpState.bind(this),
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
        this.velocity.x = 0
    }

    handleFightingStanceState() {
    }

    handleWalkingForwardsInit() {
        this.velocity.x = 0
    }

    handleWalkingForwardsState() {
    }

    handleStompingForwardsInit() {
        this.velocity.x = 300 * this.direction
    }

    handleStompingForwardsState() {
    }

    handleStompingBackwardsInit() {
        this.velocity.x = -300 * this.direction
    }

    handleStompingBackwardsState() {
    }

    handleWalkingBackwardsInit() {
        this.velocity.x = 0
    }

    handleWalkingBackwardsState() {
    }

    handleJumpForwardsInit() {
        this.velocity.y = this.initialVelocity.jump
    }

    handleJumpForwardsState(time) {
        this.velocity.y += this.gravity * time.secondsPassed

        if (this.position.y > STAGE_FLOOR) {
            this.position.y = STAGE_FLOOR
        }
    }

    handleLandingJumpInit() {
        this.velocity.x = 0
        this.velocity.y = 0
    }

    handleLandingJumpState() {
    }

    updateStageContraints(context) {
        const WIDTH = 50

        if (this.direction == FighterDirection.LEFT) {
            if (this.currentState == FighterState.WALKING_FORWARDS) {
                if (this.position.x > context.canvas.width - this.width - WIDTH) {
                    this.changeState(FighterState.STOMPING_FORWARDS)
                }
            }

            if (this.currentState == FighterState.WALKING_BACKWARDS) {
                if (this.position.x < this.width + WIDTH) {
                    this.changeState(FighterState.STOMPING_BACKWARDS)
                }
            }
        } else {
            if (this.currentState == FighterState.WALKING_FORWARDS) {
                if (this.position.x < this.width + WIDTH) {
                    this.changeState(FighterState.STOMPING_FORWARDS)
                }
            }

            if (this.currentState == FighterState.WALKING_BACKWARDS) {
                if (this.position.x > context.canvas.width - this.width - WIDTH) {
                    this.changeState(FighterState.STOMPING_BACKWARDS)
                }
            }
        }

        if (this.currentState == FighterState.LANDING_JUMP && this.animationFrame >= this.animations[this.currentState].length - 1) {
            this.changeState(FighterState.FIGHTING_STANCE)
        }

        if (this.currentState == FighterState.JUMP_FORWARDS && this.position.y >= STAGE_FLOOR && this.animationFrame >= this.animations[this.currentState].length - 1) {
            this.changeState(FighterState.LANDING_JUMP)
        }

        if (this.position.x > context.canvas.width - WIDTH) {
            this.position.x = context.canvas.width - WIDTH
        }

        if (this.position.x < WIDTH) {
            this.position.x = WIDTH
        }
    }

    updateAnimation(time) {
        const animation = this.animations[this.currentState]
        const [, frameDelay] = animation[this.animationFrame]

        if (time.previous > this.animationTimer + frameDelay) {
            this.animationTimer = time.previous

            if (frameDelay > 0) {
                this.animationFrame++
            }

            if (this.animationFrame >= animation.length) {
                this.animationFrame = 0

                if (this.currentState == FighterState.WALKING_FORWARDS) {
                    this.position.x += this.forwardsStep * this.direction
                }

                if (this.currentState == FighterState.WALKING_BACKWARDS) {
                    this.position.x += this.backwardsStep * this.direction
                }
            }

            if (this.currentState == FighterState.STOMPING_FORWARDS || this.currentState == FighterState.STOMPING_BACKWARDS) {
                this.position.x += this.velocity.x * time.secondsPassed
            }
        }
    }

    update(time, context) {
        this.position.y += this.velocity.y * time.secondsPassed
        this.states[this.currentState].update(time, context)
        this.updateAnimation(time)
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
        const [frameKey] = this.animations[this.currentState][this.animationFrame]
        const [[x, y, width, height], [originX, originY]] = this.frames.get(frameKey)

        context.scale(this.direction, 1)
        context.drawImage(this.image, x, y, width, height, Math.floor(this.position.x * this.direction) - originX, Math.floor(this.position.y) - originY, width, height)
        context.setTransform(1, 0, 0, 1, 0, 0)
        this.width = width
        this.drawDebug(context)
    }
}