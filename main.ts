let rain = 0
let temp = 0
xiamiBoard.initXiaMiBoard()
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(2000)
I2C_LCD1602.BacklightOn()
xiamiBoard.OLEDshowUserText("Silicon", 0, 0)
xiamiBoard.OLEDshowUserText("Workshop", 2, 0)
I2C_LCD1602.ShowString("Temperature", 0, 0)
I2C_LCD1602.ShowString("Rain: ", 0, 2)
basic.pause(2000)
pins.servoWritePin(AnalogPin.P8, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 90)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 0)
basic.forever(function () {
    rain = pins.analogReadPin(AnalogReadWritePin.P2)
    temp = input.temperature()
    I2C_LCD1602.ShowNumber(temp, 12, 0)
    I2C_LCD1602.ShowNumber(rain, 8, 2)
    if (rain >= 800) {
        pins.servoWritePin(AnalogPin.P8, 90)
    } else {
        pins.servoWritePin(AnalogPin.P8, 0)
    }
    if (temp >= 26) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 128)
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
    }
})
