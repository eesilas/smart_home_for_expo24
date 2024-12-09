let dist = 0
basic.showIcon(IconNames.Meh)
let rain = 0
let temp = 0
xiamiBoard.initXiaMiBoard()
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(2000)
I2C_LCD1602.BacklightOn()
xiamiBoard.OLEDshowUserText("Distance", 0, 0)
I2C_LCD1602.ShowString("Temperature", 0, 0)
I2C_LCD1602.ShowString("Rain: ", 0, 2)
basic.pause(2000)
pins.servoWritePin(AnalogPin.P8, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 90)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P8, 0)
basic.forever(function () {
    dist = xiamiBoard.Ultrasonic()
    rain = pins.analogReadPin(AnalogReadWritePin.P2)
    temp = input.temperature()
    xiamiBoard.OLEDshowUserNumber(dist, 0, 12)
    I2C_LCD1602.ShowNumber(temp, 12, 0)
    I2C_LCD1602.ShowNumber(rain, 8, 2)
    if (Math.trunc(rain) >= 180) {
        pins.servoWritePin(AnalogPin.P8, 90)
    } else {
        pins.servoWritePin(AnalogPin.P8, 0)
    }
    if (temp >= 26) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 234)
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
    }
    if (dist < 50) {
        xiamiBoard.setIndexColor(0, 0xff8000)
        xiamiBoard.setIndexColor(1, 0xff8000)
    } else {
        xiamiBoard.setIndexColor(0, 0x00ffff)
        xiamiBoard.setIndexColor(1, 0x00ffff)
    }
})
