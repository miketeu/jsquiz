//Create a code quiz that contains the following requirements:

//* A start button that when clicked a timer starts and the first question appears.
document.querySelector("#start").addEventListener("click", function () {
  document.querySelector("#questions").style.display = "block";
  document.querySelector("#start-screen").style.display = "none";
});

document.querySelector("#questions").addEventListener("click", function () {
  document.querySelector("#start-screen").style.display = "block";
  document.querySelector("#questions").style.display = "none";
});
//Timer


