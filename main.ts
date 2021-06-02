makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    btn = makerbit.irButton()
    serial.writeValue("data", btn)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
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
    }
    basic.pause(400)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
let btn = 0
DFRobotMaqueenPlus.I2CInit()
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
