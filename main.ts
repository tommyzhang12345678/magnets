basic.clearScreen()
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("x", 0)
})
