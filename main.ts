let photo = 0
let potetiometer = 0
let lum = 0
let hystérésis = 0
function terreur_de_Wallerich () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
basic.forever(function () {
    photo = pins.analogReadPin(AnalogPin.P1)
    potetiometer = pins.analogReadPin(AnalogPin.P0)
})
basic.forever(function () {
    if (lum == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(300)
    }
})
basic.forever(function () {
    if (photo <= potetiometer) {
        lum = 0
        hystérésis = potetiometer + 15
    } else if (photo <= hystérésis) {
        lum = 0
    } else {
        lum = 1
        hystérésis = 0
    }
})
