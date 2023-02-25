let initialvalue = 100;
let highescore = null;


let random = generatorandomnumber(100);
console.log(random);

function generatorandomnumber(max) {
    return Math.floor(Math.random() * max) + 1
}


// let x = parseInt(Math.random() * 50);
// console.log(x);
// document.querySelector("#btn").addEventListener("click", checkValue);
// let intiavalue = 100;
// let highscore;

function check() {

    let currentnum = document.querySelector("#guessid").value;
    console.log(currentnum);
    // let previousScore = 0;




    if (initialvalue !== 0) {
        if (currentnum > random) {
            document.querySelector(".message").textContent = "😐 Your guess is high!!";
            initialvalue--;
            document.querySelector(".score").textContent = initialvalue;
        } else if (currentnum < random) {
            document.querySelector(".message").textContent = "😐 Your guess is low!!";
            initialvalue--;
            document.querySelector(".score").textContent = initialvalue;
        } else {
            // document.querySelector(".em-crown").style.visibility = "visible";

            document.querySelector(".message").textContent = "😀Hurray You Won!!!";
            initialvalue--;

            document.querySelector(".score").textContent = initialvalue;
            highescore = initialvalue;
            document.querySelector(".highscore").textContent = highescore;
            document.body.style.background = "green";
            document.querySelector(".check").style.visibility = "hidden";
            if (random == currentnum) {
                document.querySelector(".q").textContent = currentnum;
            }

            //  return highescore;

        }
    } else {
        document.querySelector(".message").textContent = "Game Over"
    }

    // console.log(tryagain);
    // // if (previousScore < highscore)

    // if (tryagain = 4) {
    //     document.getElementById("userValue").disabled = true;
    //     document.getElementById("btn").disabled = true;
    // }

}

const playAgain = document.querySelector("#playAgain");

playAgain.addEventListener('click', function() {
    location.reload();

})