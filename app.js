const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

const updateTimer = () =>{
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;

}

const startTimer = () => {
    if (interval) { // Clear any existing interval before starting a new one
        clearInterval(interval);
    }
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 
    1000)
}

const stopTimer = () => {
    clearInterval(interval);
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);