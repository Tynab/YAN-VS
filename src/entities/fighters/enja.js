import { Fighter } from "./fighter.js"

export class Enja extends Fighter {
    constructor(x, y, velocity) {
        super('Enja', x, y, velocity)
        this.image = document.querySelector('img[alt="enja"]')
        this.frames = new Map([
            ['forwards-1', [[25, 902, 62, 94], [13, 91]]],
            ['forwards-2', [[102, 903, 71, 92], [4, 89]]],
            ['forwards-3', [[102, 903, 71, 92], [4, 89]]],
            ['forwards-4', [[189, 905, 79, 91], [0, 88]]],
            ['forwards-5', [[189, 905, 79, 91], [69, 91]]],
            ['forwards-6', [[281, 905, 71, 91], [59, 91]]],
            ['forwards-7', [[366, 902, 66, 94], [48, 94]]],
            ['forwards-8', [[448, 901, 59, 95], [38, 94]]],
            ['forwards-9', [[527, 901, 57, 95], [14, 92]]],
            ['forwards-10', [[601, 901, 60, 95], [14, 92]]]
        ])
    }
}
