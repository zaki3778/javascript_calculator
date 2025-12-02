let startButton;
let stopButton;
let resetButton;
let showTime;

let timer;
let startTime;
let elapsedTime =0;
let holdTime =0;

window.onload = function (){
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}
function start(){
    startTime = Date.now();

    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop(){
    clearInterval(timer);

    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){
    clearInterval(timer);

    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00:00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function measureTime(){
     timer = setTimeout(function () {
        elapsedTime = Date.now() - startTime + holdTime;
        let str = new Date(elapsedTime).toISOString().slice(11, 22);
        measureTime();
        showTime.textContent = str.slice(0,8) + ":" + str.slice(9);
        }, 10);

}