function LineTrackingMode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        xbeginning = huskylens.readeArrow(1, Content2.xOrigin)
        if (xbeginning < 110) {
            TurnLeft2()
        }
        if (xbeginning >= 110 && xbeginning <= 270) {
            MoveForward2()
        }
        if (xbeginning > 270) {
            TurnRight2()
        }
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
}
function TurnLeft2 () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 60)
}
function TurnRight2 () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 60)
}
function MoveForward2 () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
}
let xbeginning = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    LineTrackingMode()
})
