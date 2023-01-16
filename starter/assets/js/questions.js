//*Create a code quiz that contains the following requirements:

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

