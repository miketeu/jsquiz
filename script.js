// A start button that when clicked a timer starts and the first question appears.

 //Button id="start"
 //Open page
 
 
// Set timer

//Open question 
    //start timer.

  // Questions contain buttons for each answer.


/* Sample code from w3 working site.

    function clickRadioqui(elmnt) {
      var n, i, x;
      n = elmnt.id;
      for (i = 1; i < 5; i++) {
        x = document.getElementById("label" + i);
        if (x) {x.className = x.className.replace(" checkedlabel", "");}
      }
      document.getElementById("label" + n).className += " checkedlabel";
    }
    function clickNextButton(n) {
      submitAnswer(n + 1);
    }
    function submitAnswer(n) {
      var f = document.getElementById("quizform");
      f["nextnumber"].value = n;
      f.submit();
    }
    function startTimer() {
      var tobj = document.getElementById("timespent")
      var t = "0:00";
      var s = 00;
      var d = new Date();
      var timeint = setInterval(function () {
        s += 1;
        d.setMinutes("0");
        d.setSeconds(s);
        min = d.getMinutes();
        sec = d.getSeconds();
        if (sec < 10) sec = "0" + sec;
        document.getElementById("timespent").value = min + ":" + sec;
      }, 1000);
      tobj.value = t;
    }
    if (window.addEventListener) {              
      window.addEventListener("load", startTimer);
    } else if (window.attachEvent) {                 
      window.attachEvent("onload", startTimer);
    }
    
*/


//Answer selection
    // If answer True 
    //Message and sfx


    //If answer False
      // If the answer clicked was incorrect then subtract time from the clock

       //Message and sfx
       //update timer
       //Update status(which questions have been answered.)

     // When answer is clicked, the next question appears













   



// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score