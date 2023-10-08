import { Fighter } from "./fighter.js"

export class Charlotte extends Fighter {
    constructor(x, y, velocity) {
        super('Charlotte', x, y, velocity)
        this.image = document.querySelector('img[alt="charlotte"]')
        this.frames = new Map([
            ['forwards-1', [[33, 925, 97, 115], [50, 50]]],
            ['forwards-2', [[177, 927, 100, 112], [50, 50]]],
            ['forwards-3', [[314, 929, 106, 110], [50, 50]]],
            ['forwards-4', [[458, 931, 111, 109], [50, 50]]],
            ['forwards-5', [[606, 928, 114, 111], [50, 95]]],
            ['forwards-6', [[25, 1058, 111, 119], [50, 95]]],
            ['forwards-7', [[174, 1055, 102, 121], [50, 95]]],
            ['forwards-8', [[313, 1058, 110, 119], [50, 95]]],
            ['forwards-9', [[456, 1059, 109, 118], [50, 95]]],
            ['forwards-10', [[601, 1059, 104, 118], [50, 95]]]
        ])
    }
}
