
import { questions } from '../questions.js';

const questionText = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const currentQuestionLeft = document.getElementById("currentQuestion-left");
const options = document.querySelectorAll(".option-btn");
const imageEl = document.getElementById("animal-image");
const timeLeftEl = document.getElementById("time-left");
const progressFill = document.getElementById("progress");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const submitButton = document.getElementById("submitBtn");

let score = 0;
let currentQuestion = 0;
let timer;
let totalTimeLeft = 600;
let totalTime = 0;
let totalTimer;
let answeredQuestions = Array(questions.length).fill(false);

function loadQuestion(index) {
  clearInterval(timer);
  timeLeftEl.textContent = totalTimeLeft;
  startQuestionTimer();

  const q = questions[index];
  imageEl.src = q.image;
  questionText.textContent = q.question;

  options.forEach((btn, i) => {
    btn.textContent = q.options[i];

    // ✅ Reset styles
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.style.cursor = "pointer";
    btn.style.opacity = "1";
    btn.disabled = false;

    // ✅ Attach new click handler
    btn.onclick = () => handleAnswer(btn, q.options[i] === q.answer);
  });

  updateProgress();
}


function startQuestionTimer() {
  timer = setInterval(() => {
    totalTimeLeft--;
    timeLeftEl.textContent = totalTimeLeft;
    if (totalTimeLeft <= 0) {
      clearInterval(timer);
      submitQuestions();
    }
  }, 1000);
}

function handleAnswer(button, isCorrect) {
  if (!answeredQuestions[currentQuestion]) {
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = score;
      button.style.backgroundColor = "green";
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "red";
      button.style.color = "white";

      // Also highlight the correct answer in green
      options.forEach((btn) => {
        if (btn.textContent === questions[currentQuestion].answer) {
          btn.style.backgroundColor = "green";
          btn.style.color = "white";
        }
      });
    }

    answeredQuestions[currentQuestion] = true;

    // Disable all buttons and prevent further answers
    options.forEach((btn) => {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      btn.style.opacity = "0.7";
    });

    clearInterval(timer);
    setTimeout(() => nextQuestion(), 1000); // Move to next after 1s
  }
}


function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";
  currentQuestionLeft.textContent = currentQuestion + 1;
}

function startTotalTimer() {
  totalTimer = setInterval(() => {
    totalTime++;
  }, 1000);
}

prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
});

function submitQuestions() {
  clearInterval(totalTimer);
  clearInterval(timer);
  localStorage.setItem("babyZooScore", score);
  localStorage.setItem("totalTime", totalTime);
  window.location.href = "../results/results.html";
}

submitButton.onclick = submitQuestions;

window.onload = () => {
  scoreDisplay.textContent = score;
  loadQuestion(currentQuestion);
  startTotalTimer();
};
