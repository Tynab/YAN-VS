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
            ['jumpfor-1', [[23, 1529, 98, 111], [20, 112]]],
            ['jumpfor-2', [[135, 1529, 94, 103], [21, 104]]],
            ['jumpfor-3', [[246, 1529, 84, 98], [16, 99]]],
            ['jumpfor-4', [[351, 1529, 82, 96], [17, 97]]],
            ['jumpfor-5', [[450, 1529, 82, 96], [17, 97]]],
            ['jumpfor-6', [[549, 1529, 88, 102], [16, 103]]],
            ['jumpfor-7', [[658, 1529, 98, 122], [21, 123]]],
            ['jumpfor-8', [[773, 1529, 95, 137], [20, 138]]],

            // Landing from jump
            ['landing-1', [[39, 1705, 94, 114], [34, 114]]],
            ['landing-2', [[155, 1719, 93, 100], [36, 100]]],
            ['landing-3', [[268, 1719, 93, 100], [36, 100]]]
        ])

        this.animations = {
            [FighterState.FIGHTING_STANCE]: [
                ['stance-1', 90],
                ['stance-2', 90],
                ['stance-3', 90],
                ['stance-4', 90],
                ['stance-5', 90],
                ['stance-6', 90],
                ['stance-7', 90],
                ['stance-8', 90],
                ['stance-9', 90],
                ['stance-10', 90],
                ['stance-11', 90],
                ['stance-12', 90]
            ],
            [FighterState.WALKING_FORWARDS]: [
                ['forwards-1', 60],
                ['forwards-2', 60],
                ['forwards-3', 60],
                ['forwards-4', 60],
                ['forwards-5', 60],
                ['forwards-6', 60],
                ['forwards-7', 60],
                ['forwards-8', 60],
                ['forwards-9', 60],
                ['forwards-10', 60]
            ],
            [FighterState.STOMPING_FORWARDS]: [
                ['stompfor-1', 60],
                ['stompfor-2', 60],
                ['stompfor-3', 60],
                ['stompfor-4', 60],
                ['stompfor-5', 60],
                ['stompfor-6', 60],
                ['stompfor-7', 60],
                ['stompfor-8', 60],
                ['stompfor-9', 60],
                ['stompfor-10', 60]
            ],
            [FighterState.WALKING_BACKWARDS]: [
                ['backwards-1', 60],
                ['backwards-2', 60],
                ['backwards-3', 60],
                ['backwards-4', 60],
                ['backwards-5', 60],
                ['backwards-6', 60],
                ['backwards-7', 60],
                ['backwards-8', 60],
                ['backwards-9', 60],
                ['backwards-10', 60]
            ],
            [FighterState.STOMPING_BACKWARDS]: [
                ['stompback-1', 60],
                ['stompback-2', 60],
                ['stompback-3', 60],
                ['stompback-4', 60],
                ['stompback-5', 60],
                ['stompback-6', 60],
                ['stompback-7', 60],
                ['stompback-8', 60],
                ['stompback-9', 60],
                ['stompback-10', 60]
            ],
            [FighterState.JUMP_FORWARDS]: [
                ['jumpfor-1', 180],
                ['jumpfor-2', 60],
                ['jumpfor-3', 60],
                ['jumpfor-4', 60],
                ['jumpfor-5', 60],
                ['jumpfor-6', 60],
                ['jumpfor-7', 60],
                ['jumpfor-8', -1]
            ],
            [FighterState.LANDING_JUMP]: [
                ['landing-1', 90],
                ['landing-2', 90],
                ['landing-3', 90],
                ['', 0]
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
