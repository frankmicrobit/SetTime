input.onButtonPressed(Button.A, function () {
    basic.showString("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) + "" + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY) + "." + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH) + "." + RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR))
})
input.onButtonPressed(Button.AB, function () {
    RTC_DS1307.DateTime(
    2022,
    11,
    30,
    11,
    22,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
})
basic.forever(function () {
	
})
