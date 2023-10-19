import { Fighter } from "./fighter.js"
import { FighterState } from "../../constants/fighter.js"

export class Enja extends Fighter {
    constructor(x, y, velocity) {
        super('Enja', x, y, velocity)
        this.image = document.querySelector('img[alt="enja"]')
        this.frames = new Map([
            // Fighting Stance
            ['stance-1', [[30, 452, 69, 95], [34, 95]]],
            ['stance-2', [[136, 451, 70, 96], [35, 96]]],
            ['stance-3', [[242, 452, 71, 95], [36, 95]]],
            ['stance-4', [[350, 453, 70, 94], [35, 94]]],
            ['stance-5', [[456, 452, 71, 95], [36, 95]]],
            ['stance-6', [[565, 452, 69, 95], [34, 95]]],
            ['stance-7', [[672, 451, 69, 96], [34, 96]]],
            ['stance-8', [[779, 452, 69, 95], [34, 95]]],

            // Walking Forwards
            ['forwards-1', [[25, 902, 62, 94], [31, 95]]],
            ['forwards-2', [[102, 903, 71, 92], [22, 94]]],
            ['forwards-3', [[189, 905, 79, 91], [18, 92]]],
            ['forwards-4', [[281, 905, 71, 91], [8, 92]]],
            ['forwards-5', [[366, 902, 66, 94], [-3, 95]]],
            ['forwards-6', [[448, 901, 59, 95], [-13, 95]]],
            ['forwards-7', [[527, 901, 57, 95], [-17, 96]]],
            ['forwards-8', [[601, 901, 60, 95], [-17, 96]]],

            // Stomping forwards
            ['stompfor-1', [[25, 902, 62, 94], [31, 95]]],
            ['stompfor-2', [[102, 903, 71, 92], [35, 94]]],
            ['stompfor-3', [[189, 905, 79, 91], [39, 92]]],
            ['stompfor-4', [[281, 905, 71, 91], [35, 92]]],
            ['stompfor-5', [[366, 902, 66, 94], [33, 95]]],
            ['stompfor-6', [[448, 901, 59, 95], [29, 95]]],
            ['stompfor-7', [[527, 901, 57, 95], [28, 96]]],
            ['stompfor-8', [[601, 901, 60, 95], [30, 96]]],

            // Walking Backwards
            ['backwards-1', [[25, 1047, 62, 94], [31, 94]]],
            ['backwards-2', [[107, 1048, 78, 93], [49, 93]]],
            ['backwards-3', [[200, 1052, 87, 89], [58, 90]]],
            ['backwards-4', [[299, 1054, 82, 87], [58, 90]]],
            ['backwards-5', [[398, 1054, 65, 87], [73, 90]]],
            ['backwards-6', [[478, 1050, 59, 91], [80, 91]]],
            ['backwards-7', [[550, 1049, 57, 92], [81, 92]]],
            ['backwards-8', [[620, 1047, 60, 94], [86, 94]]],

            // Stomping backwards
            ['stompback-1', [[25, 1047, 62, 94], [31, 94]]],
            ['stompback-2', [[107, 1048, 78, 93], [39, 93]]],
            ['stompback-3', [[200, 1052, 87, 89], [43, 90]]],
            ['stompback-4', [[299, 1054, 82, 87], [41, 90]]],
            ['stompback-5', [[398, 1054, 65, 87], [32, 90]]],
            ['stompback-6', [[478, 1050, 59, 91], [29, 91]]],
            ['stompback-7', [[550, 1049, 57, 92], [28, 92]]],
            ['stompback-8', [[620, 1047, 60, 94], [30, 94]]],

            // Jump Forwards
            ['jumpfor-1', [[33, 1217, 66, 71], [13, 109]]],
            ['jumpfor-2', [[111, 1217, 61, 82], [11, 114]]],
            ['jumpfor-3', [[185, 1217, 71, 103], [16, 125]]],
            ['jumpfor-4', [[275, 1217, 76, 91], [18, 119]]],
            ['jumpfor-5', [[374, 1217, 62, 142], [11, 144]]],

            // Landing from jump
            ['landing-1', [[26, 1427, 61, 86], [22, 88]]],
            ['landing-2', [[107, 1440, 70, 74], [24, 74]]],
            ['landing-3', [[195, 1444, 75, 74], [25, 74]]],
            ['landing-4', [[332, 1444, 75, 74], [25, 74]]],
            ['landing-5', [[420, 1444, 75, 74], [25, 74]]],
            ['landing-6', [[508, 1444, 75, 74], [25, 74]]],
            ['landing-7', [[596, 1444, 75, 74], [25, 74]]]
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
                ['stance-8', 90]
            ],
            [FighterState.WALKING_FORWARDS]: [
                ['forwards-1', 60],
                ['forwards-2', 60],
                ['forwards-3', 60],
                ['forwards-4', 60],
                ['forwards-5', 60],
                ['forwards-6', 60],
                ['forwards-7', 60],
                ['forwards-8', 60]
            ],
            [FighterState.STOMPING_FORWARDS]: [
                ['stompfor-1', 60],
                ['stompfor-2', 60],
                ['stompfor-3', 60],
                ['stompfor-4', 60],
                ['stompfor-5', 60],
                ['stompfor-6', 60],
                ['stompfor-7', 60],
                ['stompfor-8', 60]
            ],
            [FighterState.WALKING_BACKWARDS]: [
                ['backwards-1', 60],
                ['backwards-2', 60],
                ['backwards-3', 60],
                ['backwards-4', 60],
                ['backwards-5', 60],
                ['backwards-6', 60],
                ['backwards-7', 60],
                ['backwards-8', 60]
            ],
            [FighterState.STOMPING_BACKWARDS]: [
                ['stompback-1', 60],
                ['stompback-2', 60],
                ['stompback-3', 60],
                ['stompback-4', 60],
                ['stompback-5', 60],
                ['stompback-6', 60],
                ['stompback-7', 60],
                ['stompback-8', 60]
            ],
            [FighterState.JUMP_FORWARDS]: [
                ['jumpfor-1', 180],
                ['jumpfor-2', 120],
                ['jumpfor-3', 120],
                ['jumpfor-4', 120],
                ['jumpfor-5', -1],
            ],
            [FighterState.LANDING_JUMP]: [
                ['landing-1', 60],
                ['landing-2', 60],
                ['landing-3', 30],
                ['landing-4', 30],
                ['landing-5', 30],
                ['landing-6', 30],
                ['landing-7', 30],
                ['', 0]
            ]
        }

        this.initialVelocity = {
            jump: -420
        }

        this.gravity = 1000
        this.forwardsStep = 49
        this.backwardsStep = -59
    }
}
