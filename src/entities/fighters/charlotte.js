import { Fighter } from "./fighter.js"

export class Charlotte extends Fighter {
    constructor(x, y, velocity) {
        super('Charlotte', x, y, velocity)
        this.image = document.querySelector('img[alt="charlotte"]')
        this.frames = new Map([
            // Move Forwards
            ['forwards-1', [[33, 925, 97, 115], [0, 113]]],
            ['forwards-2', [[177, 927, 100, 112], [0, 111]]],
            ['forwards-3', [[314, 929, 106, 110], [89, 110]]],
            ['forwards-4', [[458, 931, 111, 109], [83, 109]]],
            ['forwards-5', [[606, 928, 114, 111], [74, 111]]],
            ['forwards-6', [[25, 1058, 111, 119], [87, 119]]],
            ['forwards-7', [[174, 1055, 102, 121], [60, 121]]],
            ['forwards-8', [[313, 1058, 110, 119], [13, 117]]],
            ['forwards-9', [[456, 1059, 109, 118], [9, 116]]],
            ['forwards-10', [[601, 1059, 104, 118], [5, 116]]],

            // Move Backwards
            ['backwards-1', [[33, 925, 97, 115], [0, 113]]],
            ['backwards-2', [[177, 927, 100, 112], [0, 111]]],
            ['backwards-3', [[314, 929, 106, 110], [89, 110]]],
            ['backwards-4', [[458, 931, 111, 109], [83, 109]]],
            ['backwards-5', [[606, 928, 114, 111], [74, 111]]],
            ['backwards-6', [[25, 1058, 111, 119], [87, 119]]],
            ['backwards-7', [[174, 1055, 102, 121], [60, 121]]],
            ['backwards-8', [[313, 1058, 110, 119], [13, 117]]],
            ['backwards-9', [[456, 1059, 109, 118], [9, 116]]],
            ['backwards-10', [[601, 1059, 104, 118], [5, 116]]]
        ])

        this.animations = {
            'walkForwards': ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8', 'forwards-9', 'forwards-10'],
            'walkBackwards': ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8', 'backwards-9', 'backwards-10']
        }
    }
}
