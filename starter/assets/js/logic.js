//Create a code quiz that contains the following requirements:

//* A start button that when clicked a timer starts and the first question appears.

document.querySelector("#start").addEventListener("click", function () {
  document.querySelector("#questions").style.display = "block";
  document.querySelector("#start-screen").style.display = "none";

  //Get the timer
  document.getElementById("time").innerHTML = 01 + ":" + 11;
  startTimer();

  //Get questions
});

//Timer starts here

function startTimer() {
  var presentTime = document.getElementById("time").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    return;
  }

  document.getElementById("time").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

//End timer.

let choicesEl = document.querySelector("#choices");
let questions = [
  {
    question: "This is question 1. Is it :-",
    answers: ["ex1", "ex2", "ex3", "ex4"],
    correctAnswer: 0,
  },

  {
    question: "Q-2  what is answer?",
    answers: ["ex1-2", "ex2-2", "ex3-2", "ex4-2"],
    correctAnswer: 3,
  },
];

let currentQuestion = 1;

choicesEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log(event.target.getAttribute("data-index"));
  }
});

/*
document.querySelector("#questions").addEventListener("click", function () {
  document.querySelector("#start-screen").style.display = "block";
  document.querySelector("#questions").style.display = "none";
});
*/

//Timer
