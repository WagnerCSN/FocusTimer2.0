let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseMinutes = document.querySelector('.controls .increaseMinutes')
const buttonDecreaseMinutes = document.querySelector('.controls .decreaseMinutes')
const buttonFlorest = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
let minutes
let audio = new Audio()
let timerTimeOut


buttonIncreaseMinutes.addEventListener('click', function (){
    increase5Minutes()
})

buttonDecreaseMinutes.addEventListener('click', function (){
    decrease5Minutes()
})

buttonPlay.addEventListener('click', function (){
    startTime()
})

buttonStop.addEventListener('click', function(){
    updateDisplay()
})

buttonFlorest.addEventListener('click', function (){
    audio.src = "./sounds/Floresta.wav"
    colorFocusSound()
    playingAudio ()
})

buttonChuva.addEventListener('click', function (){
    audio.src = "./sounds/Chuva.wav"
    colorFocusSound()
    playingAudio ()
})

buttonCafeteria.addEventListener('click', function (){
    audio.src = "./sounds/Cafeteria.wav"
    colorFocusSound()
    playingAudio ()
    
})

buttonLareira.addEventListener('click', function (){
    audio.src ="./sounds/Lareira.wav"
    colorFocusSound()
    playingAudio ()
    
})

function startTime(){
    minutes=minutesDisplay.textContent
    loopingTime()
    buttonPlay.classList.add('off')
}

function loopingTime(){

    timerTimeOut = setTimeout(function(){
        let seconds =Number(secondsDisplay.textContent)
        let minutes =Number(minutesDisplay.textContent)
        if(minutes==0&seconds==0){
            return
        }
        if(minutes==0&seconds==1){
            updateSeconds(seconds)
            return
        }
        if(seconds <=0){
            seconds = 60
        }
        if(seconds == 1 || minutes ==1){
            updateMinutes(minutes) 
        }
        if(minutes <0){
            return
        }
        updateSeconds(seconds)    
        loopingTime()
    },1000)
}

function playingAudio (){
    audio.play()
    audio.loop = true
}

function colorFocusSound(){
    if(audio.src=="http://127.0.0.1:5500/sounds/Lareira.wav"){
        if(audio.currentTime==0){
            buttonLareira.style.background = '#02799D'
            buttonCafeteria.style.background = '#E1E1E6'
            buttonChuva.style.background = '#E1E1E6'
            buttonFlorest.style.background = '#E1E1E6'
        }
    }
    if(audio.src == "http://127.0.0.1:5500/sounds/Cafeteria.wav"){
        if(audio.currentTime==0){
            buttonLareira.style.background = '#E1E1E6'
            buttonCafeteria.style.background = '#02799D'
            buttonChuva.style.background = '#E1E1E6'
            buttonFlorest.style.background = '#E1E1E6'
        }
    }

    if(audio.src == "http://127.0.0.1:5500/sounds/Chuva.wav"){
        if(audio.currentTime==0){
            buttonLareira.style.background = '#E1E1E6'
            buttonCafeteria.style.background = '#E1E1E6'
            buttonChuva.style.background = '#02799D'
            buttonFlorest.style.background = '#E1E1E6'
        }
    }

    if(audio.src == "http://127.0.0.1:5500/sounds/Floresta.wav"){
        if(audio.currentTime==0){
            buttonLareira.style.background = '#E1E1E6'
            buttonCafeteria.style.background = '#E1E1E6'
            buttonChuva.style.background = '#E1E1E6'
            buttonFlorest.style.background = '#02799D'
        }
    }
}

function increase5Minutes(){
    let minute = Number(minutesDisplay.textContent)
    if(minute>=0&&minute<60){
        minute=minute+5
        minutesDisplay.textContent= String(minute).padStart(2,"0")
    }
}

function updateMinutes(minutes){
    minutesDisplay.textContent= String(minutes - 1).padStart(2,"0")
}

function updateSeconds(seconds){
    secondsDisplay.textContent=String(seconds - 1).padStart(2,"0")
}

function updateDisplay(){
    audio.pause()
    clearTimeout(timerTimeOut)
    minutesDisplay.textContent=minutes
    secondsDisplay.textContent=String('0').padStart(2,"0")
}

function decrease5Minutes(){
    let minute = Number(minutesDisplay.textContent)
    if(minute>0){
        minute=minute-5
        minutesDisplay.textContent= String(minute).padStart(2,"0")
    }
}


