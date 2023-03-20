const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseMinutes = document.querySelector('.controls .increaseMinutes')
const buttonDecreaseMinutes = document.querySelector('.controls .decreaseMinutes')
const buttonFlorest = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let audio = new Audio()
let timerTimeOut

export{
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonIncreaseMinutes,
    buttonDecreaseMinutes,
    buttonFlorest,
    buttonChuva,
    buttonCafeteria,
    buttonLareira,
    audio,
    timerTimeOut
}