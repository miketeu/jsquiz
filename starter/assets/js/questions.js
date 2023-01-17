//*Create a code quiz that contains the following requirements:

// The timer
Window.onload = startTimer();

function startTimer(duration, display) {
  var time = duration, minutes, seconds;
  setInterval(function() {
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    if (--time < 0) {
      time = 0;
      // To do auto reset of timer 

    time = duration;
    }

  }, 1000);
}




var theQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    answers: {

    }

  },
];






// * When answer is clicked, the next question appears



let choicesEl = document.querySelector("#choices");
let question = [
  { question: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },

  { question: "", answers: ["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2 },
];

let currentQuestion = 1;

choicesEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log(event.target.getAttribute("data-index"));
  }
});


// * If the answer clicked was incorrect then subtract time from the clock
//* The quiz should end when all questions are answered or the timer reaches 0.

