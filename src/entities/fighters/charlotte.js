import { Fighter } from "./fighter.js"
import { FighterState } from "../../constants/fighter.js"

export class Charlotte extends Fighter {
    constructor(x, y, velocity) {
        super('Charlotte', x, y, velocity)
        this.image = document.querySelector('img[alt="charlotte"]')
        this.frames = new Map([
            // Fighting Stance
            ['stance-1', [[33, 451, 95, 117], [47, 117]]],
            ['stance-2', [[156, 450, 98, 118], [46, 118]]],
            ['stance-3', [[292, 449, 102, 119], [45, 119]]],
            ['stance-4', [[427, 448, 105, 120], [45, 120]]],
            ['stance-5', [[565, 449, 102, 119], [45, 119]]],
            ['stance-6', [[702, 450, 98, 118], [46, 118]]],
            ['stance-7', [[40, 584, 95, 117], [47, 117]]],
            ['stance-8', [[178, 583, 98, 118], [46, 118]]],
            ['stance-9', [[316, 582, 102, 119], [45, 119]]],
            ['stance-10', [[453, 581, 105, 120], [45, 120]]],
            ['stance-11', [[591, 582, 102, 119], [45, 119]]],
            ['stance-12', [[728, 583, 98, 118], [46, 118]]],

            // Walking Forwards
            ['forwards-1', [[33, 925, 97, 115], [48, 115]]],
            ['forwards-2', [[177, 927, 100, 112], [48, 113]]],
            ['forwards-3', [[314, 929, 106, 110], [48, 111]]],
            ['forwards-4', [[458, 931, 111, 109], [42, 110]]],
            ['forwards-5', [[606, 928, 114, 111], [33, 112]]],
            ['forwards-6', [[25, 1058, 111, 119], [29, 120]]],
            ['forwards-7', [[174, 1055, 102, 121], [2, 121]]],
            ['forwards-8', [[313, 1058, 110, 119], [-3, 119]]],
            ['forwards-9', [[456, 1059, 109, 118], [-7, 118]]],
            ['forwards-10', [[601, 1059, 104, 118], [-11, 118]]],

            // Walking Backwards
            ['backwards-1', [[29, 1219, 95, 118], [48, 118]]],
            ['backwards-2', [[146, 1218, 100, 119], [52, 119]]],
            ['backwards-3', [[276, 1218, 101, 119], [56, 119]]],
            ['backwards-4', [[415, 1218, 104, 119], [61, 119]]],
            ['backwards-5', [[547, 1218, 114, 119], [86, 121]]],
            ['backwards-6', [[25, 1357, 108, 113], [90, 115]]],
            ['backwards-7', [[158, 1358, 109, 112], [99, 114]]],
            ['backwards-8', [[295, 1360, 114, 110], [105, 111]]],
            ['backwards-9', [[439, 1358, 106, 112], [107, 113]]],
            ['backwards-10', [[582, 1353, 95, 117], [109, 117]]]
        ])

        this.animations = {
            [FighterState.FIGHTING_STANCE]: ['stance-1', 'stance-2', 'stance-3', 'stance-4', 'stance-5', 'stance-6', 'stance-7', 'stance-8', 'stance-9', 'stance-10', 'stance-11', 'stance-12'],
            [FighterState.WALKING_FORWARDS]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8', 'forwards-9', 'forwards-10'],
            [FighterState.WALKING_BACKWARDS]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8', 'backwards-9', 'backwards-10']
        }

        this.forwardsStep = 64
        this.backwardsStep = -64
    }
}
