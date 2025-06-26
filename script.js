// Select the Start Quiz button from the DOM
let StartBtn = document.querySelector(".start-btn");

// Function to handle starting the quiz
function startQuiz() {
  // Redirect the user to the quiz page
  window.location.href = "./pages/quiz/quiz.html";
}

// Attach click event listener to the Start button
StartBtn.addEventListener('click', startQuiz);
