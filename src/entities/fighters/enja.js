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
            ['forwards-1', [[25, 902, 62, 94], [31, 94]]],
            ['forwards-2', [[102, 903, 71, 92], [22, 93]]],
            ['forwards-3', [[189, 905, 79, 91], [18, 91]]],
            ['forwards-4', [[281, 905, 71, 91], [10, 91]]],
            ['forwards-5', [[366, 902, 66, 94], [-1, 94]]],
            ['forwards-6', [[448, 901, 59, 95], [-11, 95]]],
            ['forwards-7', [[527, 901, 57, 95], [-15, 95]]],
            ['forwards-8', [[601, 901, 60, 95], [-15, 95]]],

            // Stomping forwards
            ['stompfor-1', [[25, 902, 62, 94], [31, 94]]],
            ['stompfor-2', [[102, 903, 71, 92], [35, 93]]],
            ['stompfor-3', [[189, 905, 79, 91], [39, 91]]],
            ['stompfor-4', [[281, 905, 71, 91], [35, 91]]],
            ['stompfor-5', [[366, 902, 66, 94], [33, 94]]],
            ['stompfor-6', [[448, 901, 59, 95], [29, 95]]],
            ['stompfor-7', [[527, 901, 57, 95], [28, 95]]],
            ['stompfor-8', [[601, 901, 60, 95], [30, 95]]],

            // Walking Backwards
            ['backwards-1', [[25, 1047, 62, 94], [31, 94]]],
            ['backwards-2', [[107, 1048, 78, 93], [49, 93]]],
            ['backwards-3', [[200, 1052, 87, 89], [58, 90]]],
            ['backwards-4', [[299, 1054, 82, 87], [58, 90]]],
            ['backwards-5', [[398, 1054, 65, 87], [74, 90]]],
            ['backwards-6', [[478, 1050, 59, 91], [81, 91]]],
            ['backwards-7', [[550, 1049, 57, 92], [82, 92]]],
            ['backwards-8', [[620, 1047, 60, 94], [89, 94]]],

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
            ['jumpfor-1', [[33, 1217, 66, 71], [33, 71]]],
            ['jumpfor-2', [[111, 1217, 61, 82], [30, 82]]],
            ['jumpfor-3', [[185, 1217, 71, 103], [35, 103]]],
            ['jumpfor-4', [[275, 1217, 76, 91], [38, 91]]],
            ['jumpfor-5', [[374, 1217, 62, 142], [31, 142]]],
            ['jumpfor-6', [[26, 1427, 61, 86], [30, 86]]],
            ['jumpfor-7', [[107, 1440, 70, 74], [32, 72]]],
            ['jumpfor-8', [[195, 1444, 75, 74], [34, 72]]]
        ])

        this.animations = {
            [FighterState.FIGHTING_STANCE]: ['stance-1', 'stance-2', 'stance-3', 'stance-4', 'stance-5', 'stance-6', 'stance-7', 'stance-8'],
            [FighterState.WALKING_FORWARDS]: ['forwards-1', 'forwards-2', 'forwards-3', 'forwards-4', 'forwards-5', 'forwards-6', 'forwards-7', 'forwards-8'],
            [FighterState.STOMPING_FORWARDS]: ['stompfor-1', 'stompfor-2', 'stompfor-3', 'stompfor-4', 'stompfor-5', 'stompfor-6', 'stompfor-7', 'stompfor-8'],
            [FighterState.WALKING_BACKWARDS]: ['backwards-1', 'backwards-2', 'backwards-3', 'backwards-4', 'backwards-5', 'backwards-6', 'backwards-7', 'backwards-8'],
            [FighterState.STOMPING_BACKWARDS]: ['stompback-1', 'stompback-2', 'stompback-3', 'stompback-4', 'stompback-5', 'stompback-6', 'stompback-7', 'stompback-8'],
            [FighterState.JUMP_FORWARDS]: ['jumpfor-1', 'jumpfor-2', 'jumpfor-3', 'jumpfor-4', 'jumpfor-5', 'jumpfor-6', 'jumpfor-7', 'jumpfor-8']
        }

        this.forwardsStep = 47
        this.backwardsStep = -62
    }
}
