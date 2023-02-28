input.onButtonPressed(Button.A, function () {
    Pause = true
    basic.clearScreen()
    basic.pause(200)
    SmallDigits.ShowNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR), LeadingZeroEnum.zz)
    basic.pause(1000)
    SmallDigits.ShowNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE), LeadingZeroEnum.zz)
    basic.pause(1000)
    Pause = false
})
input.onButtonPressed(Button.AB, function () {
    RTC_DS1307.DateTime(
    2023,
    2,
    28,
    18,
    47,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + 1)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
})
let Pause = false
Pause = false
led.setBrightness(10)
radio.setGroup(255)
basic.forever(function () {
    if (RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) == 0) {
        radio.sendValue("Hour", RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
        radio.sendValue("Minute", RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
        basic.pause(1000)
    }
    if (!(Pause)) {
        SmallDigits.ShowNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND), LeadingZeroEnum.zz)
    }
    basic.pause(100)
})
