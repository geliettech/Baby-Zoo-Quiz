let StartBtn = document.querySelector(".start-btn");

      
function startQuiz() {
  window.location.href = "./pages/quiz/quiz.html"; // route or Navigate to quiz page
}
StartBtn.addEventListener('click',startQuiz)