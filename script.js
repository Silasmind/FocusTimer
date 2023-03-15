const lightButton= document.querySelector('#light')
const darkButton= document.querySelector('#dark')
const buttonPlay= document.querySelector('#playButton')
const buttonStop= document.querySelector('#stopButton')
const plusButton= document.querySelector('#plusButton')
const downButton= document.querySelector('#downButton')
const florestSong= document.querySelector('#forestSong')
const    rainSong= document.querySelector('#rainSong')
const  streetSong= document.querySelector('#streetSong')
const    fireSong= document.querySelector('#fireSong')
const minutesDisplay= document.querySelector('.minutes')
const secondsDisplay= document.querySelector('.seconds')
let timerTimeOut
let span= document.querySelectorAll('span')
const playFlorestSong= new Audio('./assets/Floresta.wav')
const playRainSong= new Audio('./assets/Chuva.wav')
const playStreetSong= new Audio('./assets/Cafeteria.wav')
const playFireSong= new Audio('./assets/Lareira.wav')
let florestVol= document.querySelector('#florestSongVolume')
let streetVol= document.querySelector('#streetSongVolume')
let fireVol= document.querySelector('#fireSongVolume')
let rainVol= document.querySelector('#rainSongVol')



function soundVol(song, slider){

    song.volume= slider.value/100;
}



function soundControl(song1,song2,song3,song4){



    song1.play()
    song2.pause()
    song3.pause()
    song4.pause()

}

function darkMod(){
    
document.body.classList.toggle('dark')

}
function lightMod(){
    
    document.body.classList.toggle('dark')
    
    }




function addColorAtributte(element1,element2,element3,element4){

element1.classList.add('orange')

element2.classList.remove('orange')
element3.classList.remove('orange')
element4.classList.remove('orange')
}

function count(){


    countdown()
    buttonPlay.removeEventListener('click',count)}
function countdown(){
    
   
   timerTimeOut= setTimeout(function(){
        let seconds= Number(secondsDisplay.textContent)
   let minutes= Number(minutesDisplay.textContent)
        if( seconds<=0){
        
        seconds=60
        minutesDisplay.textContent=String(minutes -1).padStart(2,'0')

        
        }
        if(minutesDisplay.textContent<=0){

            minutesDisplay.textContent=59
        }
        
        secondsDisplay.textContent= String(seconds-1).padStart(2,'0')
        countdown()
        
        },1000)

    }

plusButton.addEventListener('click', ()=>{
minutesDisplay.textContent=Number(minutesDisplay.textContent)+5
if(minutesDisplay.textContent>=60){

    minutesDisplay.textContent=0
}
if(minutesDisplay.textContent<10){
    minutesDisplay.textContent=String(minutesDisplay.textContent).padStart(2,'0')
}
})

downButton.addEventListener('click',()=>{
minutesDisplay.textContent=Number(minutesDisplay.textContent)-5
if(minutesDisplay.textContent<0){
minutesDisplay.textContent=55

}
if(minutesDisplay.textContent<10){
    minutesDisplay.textContent=String(minutesDisplay.textContent).padStart(2,'0')
}})


buttonPlay.addEventListener('click',count)

fireSong.addEventListener('click',()=>{
    soundVol(playFireSong, fireVol)
    soundControl(playFireSong,playRainSong,playFlorestSong,playStreetSong)
    addColorAtributte(fireSong,streetSong,rainSong,florestSong)

})
streetSong.addEventListener('click',()=>{
    soundVol(playStreetSong, streetVol)

    soundControl(playStreetSong,playRainSong,playFlorestSong,playFireSong)
    addColorAtributte(streetSong,fireSong,rainSong,florestSong)
    })

    florestSong.addEventListener('click',()=>{
        soundVol(playFlorestSong, florestVol)

soundControl(playFlorestSong,playRainSong,playStreetSong,playFireSong)
        addColorAtributte(florestSong,fireSong,rainSong,streetSong)
        })

        rainSong.addEventListener('click', ()=>{
            soundVol(playRainSong, rainVol)

            soundControl(playRainSong,playFireSong,playFlorestSong,playStreetSong)
            addColorAtributte(rainSong,fireSong,florestSong,streetSong)

        })

        buttonStop.addEventListener( 'click',()=>{
            buttonPlay.addEventListener('click',count)
           
clearTimeout(timerTimeOut)

minutesDisplay.textContent='00'
secondsDisplay.textContent='00'


        })
        darkButton.addEventListener('click',()=>{
            darkButton.classList.add('hide')
            lightButton.classList.remove('hide')
darkMod()
        })
        lightButton.addEventListener('click',()=>{
        lightButton.classList.add('hide')
            darkButton.classList.remove('hide')

            lightMod()
        })

        