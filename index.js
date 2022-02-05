// Get the questions
const questions = document.querySelectorAll(".accordion-link");

// Get the answers
const answers = document.querySelectorAll(".answer");

// Add event listener to click in question
for(let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", (event) => {
    // console.log("In IF");
    if(!event.target.classList.contains("question-clicked")) {
      event.target.classList.add("question-clicked");
      answers[i].style.display = "block";
    }
    else {
      // console.log("In ELSE");
      event.target.classList.remove("question-clicked");
      answers[i].style.display = "none";
    }
  });
}