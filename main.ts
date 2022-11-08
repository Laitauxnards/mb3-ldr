function terreur_de_Wallerich () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1023
    )
    if (pins.analogReadPin(AnalogPin.P1) < 100) {
        for (let index = 0; index < 2; index++) {
            terreur_de_Wallerich()
        }
    }
})
