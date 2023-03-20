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


buttonIncreaseMinutes.addEventListener('click', function (){
    if(Number(minutesDisplay.textContent)>=0&&Number(minutesDisplay.textContent)<60){
    minutesDisplay.textContent=Number(minutesDisplay.textContent)+5
    minutesDisplay.textContent= String(minutesDisplay.textContent).padStart(2,"0")
    }
})

buttonDecreaseMinutes.addEventListener('click', function (){
    if(Number(minutesDisplay.textContent)>0){
        minutesDisplay.textContent=Number(minutesDisplay.textContent)-1
        minutesDisplay.textContent= String(minutesDisplay.textContent).padStart(2,"0")
    }
})

buttonPlay.addEventListener('click', function (){
    minutes=minutesDisplay.textContent
    loopingTime()
})

let timerTimeOut

function loopingTime(){
    timerTimeOut = setTimeout(function(){
        let seconds =Number(secondsDisplay.textContent)
        let minutes =Number(minutesDisplay.textContent)
        if(minutes==0&seconds==0){
            return
        }
        if(minutes==0&seconds==1){
            secondsDisplay.textContent=String(seconds-1).padStart(2,"0")
            return
        }
        if(seconds <=0){
            seconds = 60
        }
        if(seconds == 1 || minutes ==1){
            minutesDisplay.textContent= String(minutes - 1).padStart(2,"0") 
        }
        if(minutes <0){
            return
        }
        secondsDisplay.textContent=String(seconds - 1).padStart(2,"0")    
        loopingTime()
    },1000)
}

buttonStop.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
    minutesDisplay.textContent=minutes
    secondsDisplay.textContent=String('0').padStart(2,"0")
})

let audio = new Audio()

buttonFlorest.addEventListener('click', function (){
 
    audio.src = "./sounds/Floresta.wav"
  
    audio.play()
    audio.loop = true
})

buttonChuva.addEventListener('click', function (){
    
    audio.src = "./sounds/Chuva.wav"
    audio.play()
    audio.loop = true
})

buttonCafeteria.addEventListener('click', function (){
    
    audio.src = "./sounds/Cafeteria.wav"
    audio.play()
    audio.loop = true
})

buttonLareira.addEventListener('click', function (){
   
    audio.src ="./sounds/Lareira.wav"
    audio.play()
    audio.loop = true
})

