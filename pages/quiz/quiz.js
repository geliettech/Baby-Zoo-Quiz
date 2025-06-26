// Import the list of quiz questions
import { questions } from "../questions.js";

// Select DOM elements for interaction and updates
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

// Initialize quiz state variables
let score = 0;
let currentQuestion = 0;
let timer; // Per-question timer
let totalTimeLeft = 600; // Total quiz time in seconds
let totalTime = 0; // Tracks elapsed time
let totalTimer; // Timer for tracking total time spent
let answeredQuestions = Array(questions.length).fill(false); // Track if each question has been answered

/**
 * Loads the question at the given index and updates UI accordingly
 */
function loadQuestion(index) {
  clearInterval(timer); // Reset previous question timer
  timeLeftEl.textContent = totalTimeLeft; // Reset time display
  startQuestionTimer(); // Start timer for current question

  const q = questions[index];
  imageEl.src = q.image;
  questionText.textContent = q.question;

  // Populate and reset all answer buttons
  options.forEach((btn, i) => {
    btn.textContent = q.options[i];

    // Reset button styles and states
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.style.cursor = "pointer";
    btn.style.opacity = "1";
    btn.disabled = false;

    // Attach click handler to evaluate answer
    btn.onclick = () => handleAnswer(btn, q.options[i] === q.answer);
  });

  updateProgress();
}

/**
 * Starts countdown timer for each question
 */
function startQuestionTimer() {
  timer = setInterval(() => {
    totalTimeLeft--;
    timeLeftEl.textContent = totalTimeLeft;

    if (totalTimeLeft <= 0) {
      clearInterval(timer);
      submitQuestions(); // Auto-submit if time runs out
    }
  }, 1000);
}

/**
 * Handles logic when a user selects an answer
 */
function handleAnswer(button, isCorrect) {
  // Prevent multiple answers for the same question
  if (!answeredQuestions[currentQuestion]) {
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = score;
      button.style.backgroundColor = "#4caf50";
      button.style.color = "#ffffff";
    } else {
      button.style.backgroundColor = "#ff0000";
      button.style.color = "#ffffff";

      // Highlight the correct answer
      options.forEach((btn) => {
        if (btn.textContent === questions[currentQuestion].answer) {
          btn.style.backgroundColor = "#4caf50";
          btn.style.color = "#ffffff";
        }
      });
    }

    // Mark question as answered and disable all options
    answeredQuestions[currentQuestion] = true;
    options.forEach((btn) => {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      btn.style.opacity = "0.7";
    });

    clearInterval(timer); // Stop the timer for this question

    // Automatically move to the next question after a short delay
    setTimeout(() => nextQuestion(), 1000);
  }
}

/**
 * Updates progress bar and current question indicator
 */
function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";
  currentQuestionLeft.textContent = currentQuestion + 1;
}

/**
 * Tracks total time taken from start of quiz
 */
function startTotalTimer() {
  totalTimer = setInterval(() => {
    totalTime++;
  }, 1000);
}

// Navigate to the previous question
prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});

// Navigate to the next question
nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
});

/**
 * Handles quiz submission and redirects to results page
 */
function submitQuestions() {
  clearInterval(totalTimer);
  clearInterval(timer);

  // Save score and time to localStorage for results display
  localStorage.setItem("babyZooScore", score);
  localStorage.setItem("totalTime", totalTime);

  // Redirect to results page
  window.location.href = "../results/results.html";
}

// Submit button handler
submitButton.onclick = submitQuestions;

/**
 * Initializes the quiz on page load
 */
window.onload = () => {
  scoreDisplay.textContent = score;
  loadQuestion(currentQuestion);
  startTotalTimer();
};
