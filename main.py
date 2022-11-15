photo = 0
potetiometer = 0
lum = 0
hystérésis = 0
def terreur_de_Wallerich():
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(300)

def on_forever():
    global photo, potetiometer
    photo = pins.analog_read_pin(AnalogPin.P1)
    potetiometer = pins.analog_read_pin(AnalogPin.P0)
basic.forever(on_forever)

def on_forever2():
    if lum == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    else:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(300)
basic.forever(on_forever2)

def on_forever3():
    global lum, hystérésis
    if photo <= potetiometer:
        lum = 0
        hystérésis = potetiometer + 15
    elif photo <= hystérésis:
        lum = 0
    else:
        lum = 1
        hystérésis = 0
basic.forever(on_forever3)
