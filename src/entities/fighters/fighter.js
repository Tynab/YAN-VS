const maxFrame = 9

export class Fighter {
    constructor(name, x, y, velocity) {
        this.name = name
        this.image = new Image()
        this.frames = new Map()
        this.position = { x, y }
        this.velocity = velocity
        this.animationFrame = 0
        this.animationTimer = 0
        this.state = 'walkForwards'
        this.animations = {}
    }

    update(time, context) {
        const [[, , width]] = this.frames.get(this.animations[this.state][this.animationFrame])

        if (time.previous > this.animationTimer + 60) {
            this.animationTimer = time.previous
            this.animationFrame++

            if (this.animationFrame > maxFrame) this.animationFrame = 0
        }

        this.position.x += this.velocity * time.secondsPassed

        if (this.position.x > context.canvas.width - width / 2) {
            this.velocity = -150
            this.state = 'walkBackwards'
        }

        if (this.position.x < width / 2) {
            this.velocity = 150
            this.state = 'walkForwards'
        }
    }

    drawDebug(context) {
        context.lineWidth = 1
        context.beginPath()
        context.strokeStyle = 'white'
        context.moveTo(this.position.x - 5, this.position.y)
        context.lineTo(this.position.x + 4, this.position.y)
        context.moveTo(this.position.x, this.position.y - 5)
        context.lineTo(this.position.x, this.position.y + 4)
        context.stroke()
    }

    draw(context) {
        const [[x, y, width, height], [originX, originY]] = this.frames.get(this.animations[this.state][this.animationFrame])

        context.drawImage(this.image, x, y, width, height, this.position.x - originX, this.position.y - originY, width, height)
        this.drawDebug(context)
    }
}