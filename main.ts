let élément = false
basic.showString("Hi! I'm Maqueen Robot.")
music.playMelody("E B C5 A B G A F ", 120)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        élément = Math.randomBoolean()
        if (élément == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        }
        if (élément == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
