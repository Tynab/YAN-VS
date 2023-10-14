import { Stage } from "./entities/stage.js"
import { FpsCounter } from "./entities/fpsCounter.js"
import { Charlotte } from "./entities/fighters/charlotte.js"
import { Enja } from "./entities/fighters/enja.js"
import { STAGE_FLOOR } from "./constants/stage.js"
import { FighterDirection, FighterState } from "./constants/fighter.js"

function populateMoveDropdown() {
    const dropdown = document.getElementById('state-dropdown')

    Object.entries(FighterState).forEach(([, value]) => {
        const option = document.createElement('option')

        option.setAttribute('value', value)
        option.innerText = value
        dropdown.appendChild(option)
    })
}

function handleFormSubmit(event, fighters) {
    event.preventDefault()

    const selectedCheckboxes = Array.from(event.target.querySelectorAll('input:checked')).map(checkbox => checkbox.value)
    const options = event.target.querySelector('select')

    fighters.forEach(fighter => {
        if (selectedCheckboxes.includes(fighter.name)) {
            fighter.changeState(options.value)
        }
    })
}

window.addEventListener('load', function () {
    populateMoveDropdown()

    const canvasEl = document.querySelector('canvas')
    const context = canvasEl.getContext('2d')

    context.imageSmoothingEnabled = false

    const fighters = [
        new Charlotte(100, STAGE_FLOOR, FighterDirection.LEFT),
        new Enja(524, STAGE_FLOOR, FighterDirection.RIGHT)
    ]

    const entities = [
        new Stage(),
        new FpsCounter(),
        ...fighters
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

    this.document.addEventListener('submit', (event) => handleFormSubmit(event, fighters))
    window.requestAnimationFrame(frame)
})
