let [secounds, minutes, hours] = [0,0,0];

let displayTime = document.getElementById("displayTime")
let timer = null;
let start = document.getElementById("start")
start.addEventListener('click', watchStart);

let newstop = document.getElementById("newstop")
newstop.addEventListener("click", watchStop)

let reset = document.getElementById("reset")
reset.addEventListener('click', watchReset);

function stopWatch(){
    secounds++;
    if(secounds == 60){
        secounds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }
  
    let h = hours< 10 ? "0" +hours :hours;
    let m = minutes< 10 ? "0" +minutes :minutes;
    let s = secounds< 10 ? "0" +secounds :secounds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
    if(timer!= null){
        clearInterval(timer)
    }
  timer =  setInterval(stopWatch, 1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [secounds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}