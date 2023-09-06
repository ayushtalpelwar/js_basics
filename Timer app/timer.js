const timedisplay = document.querySelector("#display");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let sec = 0;

startbtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        starttime = Date.now() - elapsedtime;
        intervalid = setInterval(updatetime, 75);
    }
});

pausebtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedtime = Date.now() - starttime;
        clearInterval(intervalid);
    }
});

resetbtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    starttime = 0;
    elapsedtime = 0;
    currenttime = 0;
    hrs = 0;
    mins = 0;
    sec = 0;
    timedisplay.textContent = "00:00:00";

})

function updatetime() {
    elapsedtime = Date.now() - starttime;
    sec = Math.floor((elapsedtime / 1000) % 60);
    min = Math.floor((elapsedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);


    sec = pad(sec);
    min = pad(min);
    hrs = pad(hrs);

    timedisplay.textContent = `${hrs}:${min}:${sec}`;

    function pad(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
}