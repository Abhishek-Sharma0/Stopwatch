const playButton_stopwatch = document.querySelector('.play');
const pauseButton_stopwatch = document.querySelector('.pause')
const resetButton_stopwatch = document.querySelector('.reset')
playButton_stopwatch.addEventListener('click', start);

pauseButton_stopwatch.addEventListener('click', pause)
resetButton_stopwatch.addEventListener('click', reset)
//Declare Variable to use in our functions below
let startTime_stopwatch =0
let elapsedTime_stopwatch = 0
let timeInterval_stopwatch =0

// Convert Time to a format of Hours , Minutes and Sconds
// Milliseconds
function timeToString( time ) {
    let diffInHrs = time / 3600000
    let hh = Math.floor( diffInHrs )

    let diffinMin = ( diffInHrs - hh ) * 60
    let mm = Math.floor ( diffinMin )
    
    let diffInSec = ( diffinMin - mm ) * 60
    let ss = Math.floor ( diffInSec )
    
    let diffInMs = ( diffInSec - ss ) * 100
    let ms = Math.floor ( diffInMs )
    
    let formattedMM = mm.toString().padStart(2, '0')
    let formattedSS = ss.toString(). padStart(2, '0')
    let formattedMS = ms.toString().padStart(2, '0')

    return `${formattedMM}:${formattedSS}:${formattedMS}`
}
function showButton (buttonkey) {
    console.log(buttonkey)
    const buttonToShow = buttonkey =='play' ? playButton_stopwatch : pauseButton_stopwatch
    const buttonToHide = buttonkey =='play' ? pauseButton_stopwatch :playButton_stopwatch
    buttonToShow.style.display = 'block'
    buttonToHide.style.display = 'none'
}
// Create function to modify innerHTML
function print (txt) {
    document.getElementById('display').innerHTML = txt
}
// Create start, pause and reset functions
function start(){
    startTime_stopwatch = Date.now() - elapsedTime_stopwatch
    timeInterval_stopwatch = setInterval(function printTime() {
        elapsedTime_stopwatch = Date.now() - startTime_stopwatch
        print(timeToString(elapsedTime_stopwatch))
    }, 10)
    showButton('pause')
}

function pause(){
    clearInterval(timeInterval_stopwatch)
    showButton('play')
}

function reset(){
    clearInterval(timeInterval_stopwatch)
    print('00:00:00')
    elapsedTime_stopwatch = 0 
    showButton( 'play')
}
