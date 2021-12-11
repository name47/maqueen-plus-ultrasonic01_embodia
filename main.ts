let direction = false
let U = 0
DFRobotMaqueenPluss.I2CInit()
DFRobotMaqueenPluss.PID(PID.OFF)
basic.forever(function () {
    U = DFRobotMaqueenPluss.ultraSonic(PIN.P8, PIN.P12)
    if (U < 20 && U != 0) {
        direction = Math.randomBoolean()
        if (direction == true) {
            DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 100)
            DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 0)
            basic.pause(1000)
        } else {
            DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 0)
            DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 100)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 100)
    }
})
