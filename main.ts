makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    btn = makerbit.irButton()
    if (btn == 152) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (btn == 184) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
    } else if (btn == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    } else if (btn == 66) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    } else {
        basic.showString("" + (btn))
    }
})
let btn = 0
DFRobotMaqueenPlus.I2CInit()
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
