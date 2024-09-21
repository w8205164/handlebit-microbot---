radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 11) {
        microbot.setMotorSpeed(50, -50)
        basic.showLeds(`
            . # . . #
            # # . # #
            . # . . #
            . # . . #
            . # . . #
            `)
        basic.pause(100)
    }
    if (receivedNumber == 12) {
        microbot.setMotorSpeed(-50, 50)
        basic.showLeds(`
            # . . # .
            # . # . #
            # . . . #
            # . . # .
            # . # # #
            `)
        basic.pause(100)
    }
    if (receivedNumber == 13) {
        microbot.setMotorSpeed(70, 70)
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . . . #
            # . # # #
            `)
        basic.pause(100)
    }
    if (receivedNumber == 14) {
        microbot.setMotorSpeed(-70, -70)
        basic.showLeds(`
            # . . # .
            # . # # .
            # # . # .
            # # # # #
            # . . # .
            `)
        basic.pause(100)
    }
    if (receivedNumber == 7) {
        microbot.setPixelRGB(microbot.Lights.All, RGBColors.Red)
        microbot.showLight()
        basic.showNumber(7)
        basic.pause(1000)
    }
    if (receivedNumber == 8) {
        microbot.clearLight()
        basic.showNumber(8)
        basic.pause(1000)
    }
    microbot.setMotorSpeed(0, 0)
})
microbot.microbotInit()
radio.setGroup(1)
