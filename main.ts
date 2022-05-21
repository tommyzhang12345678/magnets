basic.clearScreen()
serial.redirectToUSB()
basic.forever(function () {
    basic.clearScreen()
    serial.writeValue("x", input.magneticForce(Dimension.Strength))
})
