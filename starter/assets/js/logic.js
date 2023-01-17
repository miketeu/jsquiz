//Create a code quiz that contains the following requirements:

//* A start button that when clicked a timer starts and the first question appears.
document.querySelector("#start").addEventListener("click", function () {
  document.querySelector("#questions").style.display = "block";
  document.querySelector("#start-screen").style.display = "none";
});



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




/*
document.querySelector("#questions").addEventListener("click", function () {
  document.querySelector("#start-screen").style.display = "block";
  document.querySelector("#questions").style.display = "none";
});
*/

//Timer


