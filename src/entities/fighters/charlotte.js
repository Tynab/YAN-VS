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
            ['forwards-2', [[177, 927, 100, 112], [47, 113]]],
            ['forwards-3', [[314, 929, 106, 110], [46, 111]]],
            ['forwards-4', [[458, 931, 111, 109], [40, 110]]],
            ['forwards-5', [[606, 928, 114, 111], [31, 112]]],
            ['forwards-6', [[25, 1058, 111, 119], [27, 120]]],
            ['forwards-7', [[174, 1055, 102, 121], [2, 121]]],
            ['forwards-8', [[313, 1058, 110, 119], [-3, 119]]],
            ['forwards-9', [[456, 1059, 109, 118], [-7, 118]]],
            ['forwards-10', [[601, 1059, 104, 118], [-12, 118]]],

            // Stomping forwards
            ['stompfor-1', [[33, 925, 97, 115], [48, 115]]],
            ['stompfor-2', [[177, 927, 100, 112], [50, 113]]],
            ['stompfor-3', [[314, 929, 106, 110], [53, 111]]],
            ['stompfor-4', [[458, 931, 111, 109], [55, 110]]],
            ['stompfor-5', [[606, 928, 114, 111], [57, 112]]],
            ['stompfor-6', [[25, 1058, 111, 119], [55, 120]]],
            ['stompfor-7', [[174, 1055, 102, 121], [51, 121]]],
            ['stompfor-8', [[313, 1058, 110, 119], [55, 119]]],
            ['stompfor-9', [[456, 1059, 109, 118], [54, 118]]],
            ['stompfor-10', [[601, 1059, 104, 118], [52, 118]]],

            // Walking Backwards
            ['backwards-1', [[29, 1219, 95, 118], [47, 118]]],
            ['backwards-2', [[146, 1218, 100, 119], [51, 119]]],
            ['backwards-3', [[276, 1218, 101, 119], [55, 119]]],
            ['backwards-4', [[415, 1218, 104, 119], [60, 119]]],
            ['backwards-5', [[547, 1218, 114, 119], [87, 120]]],
            ['backwards-6', [[25, 1357, 108, 113], [91, 114]]],
            ['backwards-7', [[158, 1358, 109, 112], [100, 113]]],
            ['backwards-8', [[295, 1360, 114, 110], [106, 111]]],
            ['backwards-9', [[439, 1358, 106, 112], [107, 113]]],
            ['backwards-10', [[582, 1353, 95, 117], [112, 117]]],

            // Stomping backwards
            ['stompback-1', [[29, 1219, 95, 118], [47, 118]]],
            ['stompback-2', [[146, 1218, 100, 119], [50, 119]]],
            ['stompback-3', [[276, 1218, 101, 119], [50, 119]]],
            ['stompback-4', [[415, 1218, 104, 119], [52, 119]]],
            ['stompback-5', [[547, 1218, 114, 119], [57, 120]]],
            ['stompback-6', [[25, 1357, 108, 113], [54, 114]]],
            ['stompback-7', [[158, 1358, 109, 112], [54, 113]]],
            ['stompback-8', [[295, 1360, 114, 110], [57, 111]]],
            ['stompback-9', [[439, 1358, 106, 112], [53, 113]]],
            ['stompback-10', [[582, 1353, 95, 117], [47, 117]]],

            // Jump Forwards
            ['jumpfor-1', [[23, 1529, 98, 111], [49, 112]]],
            ['jumpfor-2', [[135, 1529, 94, 103], [50, 104]]],
            ['jumpfor-3', [[246, 1529, 84, 98], [45, 99]]],
            ['jumpfor-4', [[351, 1529, 82, 96], [46, 97]]],
            ['jumpfor-5', [[450, 1529, 82, 96], [46, 97]]],
            ['jumpfor-6', [[549, 1529, 88, 102], [45, 103]]],
            ['jumpfor-7', [[658, 1529, 98, 122], [50, 123]]],
            ['jumpfor-8', [[773, 1529, 95, 137], [49, 138]]],
            ['jumpfor-9', [[39, 1705, 94, 114], [63, 114]]],
            ['jumpfor-10', [[155, 1719, 93, 100], [65, 100]]],
            ['jumpfor-11', [[268, 1719, 93, 100], [65, 100]]]
        ])

        this.animations = {
            [FighterState.FIGHTING_STANCE]: [
                ['stance-1', 58],
                ['stance-2', 58],
                ['stance-3', 58],
                ['stance-4', 58],
                ['stance-5', 58],
                ['stance-6', 58],
                ['stance-7', 58],
                ['stance-8', 58],
                ['stance-9', 58],
                ['stance-10', 58],
                ['stance-11', 58],
                ['stance-12', 58],
            ],
            [FighterState.WALKING_FORWARDS]: [
                ['forwards-1', 65],
                ['forwards-2', 65],
                ['forwards-3', 65],
                ['forwards-4', 65],
                ['forwards-5', 65],
                ['forwards-6', 65],
                ['forwards-7', 65],
                ['forwards-8', 65],
                ['forwards-9', 65],
                ['forwards-10', 65]
            ],
            [FighterState.STOMPING_FORWARDS]: [
                ['stompfor-1', 65],
                ['stompfor-2', 65],
                ['stompfor-3', 65],
                ['stompfor-4', 65],
                ['stompfor-5', 65],
                ['stompfor-6', 65],
                ['stompfor-7', 65],
                ['stompfor-8', 65],
                ['stompfor-9', 65],
                ['stompfor-10', 65]
            ],
            [FighterState.WALKING_BACKWARDS]: [
                ['backwards-1', 65],
                ['backwards-2', 65],
                ['backwards-3', 65],
                ['backwards-4', 65],
                ['backwards-5', 65],
                ['backwards-6', 65],
                ['backwards-7', 65],
                ['backwards-8', 65],
                ['backwards-9', 65],
                ['backwards-10', 65]
            ],
            [FighterState.STOMPING_BACKWARDS]: [
                ['stompback-1', 65],
                ['stompback-2', 65],
                ['stompback-3', 65],
                ['stompback-4', 65],
                ['stompback-5', 65],
                ['stompback-6', 65],
                ['stompback-7', 65],
                ['stompback-8', 65],
                ['stompback-9', 65],
                ['stompback-10', 65]
            ],
            [FighterState.JUMP_FORWARDS]: [
                ['jumpfor-1', 180],
                ['jumpfor-2', 100],
                ['jumpfor-3', 100],
                ['jumpfor-4', 100],
                ['jumpfor-5', 100],
                ['jumpfor-6', 100],
                ['jumpfor-7', 100],
                ['jumpfor-8', 100],
                ['jumpfor-9', 100],
                ['jumpfor-10', 100],
                ['jumpfor-11', -1]
            ]
        }

        this.initialVelocity = {
            jump: -420
        }

        this.gravity = 1000
        this.forwardsStep = 64
        this.backwardsStep = -66
    }
}
