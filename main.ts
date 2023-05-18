input.onButtonPressed(Button.B, function () {
    θερμοκρασία = randint(0, 50)
    while (θερμοκρασία <= 37) {
        basic.showNumber(θερμοκρασία)
        basic.showIcon(IconNames.Happy)
        θερμοκρασία = randint(0, 50)
    }
    basic.showNumber(θερμοκρασία)
    basic.showIcon(IconNames.Sad)
})
let θερμοκρασία = 0
basic.showString("Hello!")
