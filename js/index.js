import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import {
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
}from "./elements.js"

const controls = Controls({
    minutesDisplay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    audio
})

const sound = Sound({
    buttonLareira,
    buttonCafeteria,
    buttonChuva,
    buttonFlorest,
    audio
})

buttonIncreaseMinutes.addEventListener('click', function (){
    controls.increase5Minutes()
})

buttonDecreaseMinutes.addEventListener('click', function (){
    controls.decrease5Minutes()
})

buttonPlay.addEventListener('click', function (){
    timer.startTime()
})

buttonStop.addEventListener('click', function(){
    timer.updateDisplay()
    sound.backgroundColorInitial()
})

buttonFlorest.addEventListener('click', function (){
    audio.src = "./sounds/Floresta.wav"
    sound.colorFocusSound()
    sound.playingAudio ()
})

buttonChuva.addEventListener('click', function (){
    audio.src = "./sounds/Chuva.wav"
    sound.colorFocusSound()
    sound.playingAudio ()
})

buttonCafeteria.addEventListener('click', function (){
    audio.src = "./sounds/Cafeteria.wav"
    sound.colorFocusSound()
    sound.playingAudio ()
    
})

buttonLareira.addEventListener('click', function (){
    audio.src ="./sounds/Lareira.wav"
    sound.colorFocusSound()
    sound.playingAudio ()
    
})










