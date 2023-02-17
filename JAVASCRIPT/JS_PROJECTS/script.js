let button = document.getElementById("button");
button.addEventListener("mouseover", function() {
    this.innerText = "Party Time";
    document.getElementById("button").style.backgroundImage = "linear-gradient('to right, #6E54EC, #CB52F8, #FC5EFF')";
})
button.addEventListener("mouseout", function() {
    this.innerText = "Set Alarm";

})


button.addEventListener("click", function() {
    let date = new Date();
    let hours = date.getHours();

    let wakeup = document.getElementById("wakeup");

    let afternoon = document.getElementById("afternoon");

    let naptime = document.getElementById("naptime");

    let nighttime = document.getElementById("night");

    if (parseInt(wakeup.value) === hours) {
        document.getElementById("set_time").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("containimg").src = "./image/Component 30 – 1.svg";
    } else if (parseInt(afternoon.value) === hours) {
        document.getElementById("set_time").innerText = "LET'S HAVE SOME LUNCH!!!";
        document.getElementById("containimg").src = "./image/Component 31 – 1.svg";
    } else if (parseInt(naptime.value) === hours) {
        document.getElementById("set_time").innerText = "ENJOY THE SUNSET IT'S AN EVENING!!!";
        document.getElementById("containimg").src = "./image/eve.jpg";
    } else if (parseInt(nighttime.value) === hours) {
        document.getElementById("set_time").innerText = "CLOSE YOUR EYES AND SLEEP WELL!!";
        document.getElementById("containimg").src = "./image/night.jpg";
    }

    let timming = document.getElementsByClassName("timming");
    timming[0].innerText = wakeup.options[wakeup.selectedIndex].text;
    timming[1].innerText = afternoon.options[afternoon.selectedIndex].text;
    timming[2].innerText = naptime.options[naptime.selectedIndex].text;
    timming[3].innerText = nighttime.options[nighttime.selectedIndex].text;

})

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours, minutes, seconds);
    if (hours > 12) {
        hours = hours - 12;
    }
    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let mins = document.getElementById("mins");
    mins.innerText = minutes;
    let secs = document.getElementById("secs");
    secs.innerText = seconds;
}
setInterval(() => {
    clock();
});


let date = new Date();
let hours = date.getHours();


if (hours >= 12) {
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM";
} else if (hours < 12) {
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}


let greetings = document.getElementById("greeting");
if (hours < 12) {
    greetings.innerText = "GOOD MORNING!! WAKE UP!!";
}

if (hours >= 12 && hours < 16) {
    greetings.innerText = "GOOD AFTERNOON!!";
}

if (hours >= 16 && hours < 20) {
    greetings.innerText = "GOOD EVENING!!";
}
if (hours >= 20 && hours < 24) {
    greetings.innerText = "GOOD NIGHT!!";
}