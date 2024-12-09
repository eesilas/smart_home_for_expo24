let rain = 0
xiamiBoard.initXiaMiBoard()
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(2000)
I2C_LCD1602.BacklightOn()
pins.servoWritePin(AnalogPin.P8, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 90)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 0)
basic.forever(function () {
    I2C_LCD1602.ShowString("Smart Home", 0, 0)
    I2C_LCD1602.ShowString("Rain: ", 0, 2)
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogReadWritePin.P2), 8, 2)
    basic.pause(2000)
    xiamiBoard.OLEDshowUserText("Silicon", 0, 0)
    xiamiBoard.OLEDshowUserText("Workshop", 2, 0)
    if (pins.analogReadPin(AnalogReadWritePin.P2) >= 3600) {
        pins.servoWritePin(AnalogPin.P8, 180)
    } else {
        pins.servoWritePin(AnalogPin.P8, 0)
    }
})
