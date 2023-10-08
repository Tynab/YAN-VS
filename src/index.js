import { Stage } from "./entities/stage.js"
import { FpsCounter } from "./entities/fpsCounter.js"
import { Charlotte } from "./entities/fighters/charlotte.js"
import { Enja } from "./entities/fighters/enja.js"

const GameViewport = {
    WIDTH: 624,
    HEIGHT: 456,
}

window.addEventListener('load', function () {
    const canvasEl = document.querySelector('canvas')
    const context = canvasEl.getContext('2d')

    canvasEl.width = GameViewport.WIDTH
    canvasEl.height = GameViewport.HEIGHT

    const entities = [
        new Stage(),
        new FpsCounter(),
        new Charlotte(80, 306, 150),
        new Enja(80, 446, -150)
    ]

    let frameTime = {
        previous: 0,
        secondsPassed: 0
    }

    function frame(time) {
        window.requestAnimationFrame(frame)

        frameTime = {
            secondsPassed: (time - frameTime.previous) / 1000,
            previous: time
        }

        for (const entity of entities) {
            entity.update(frameTime, context)
        }

        for (const entity of entities) {
            entity.draw(context)
        }
    }

    window.requestAnimationFrame(frame)
})
