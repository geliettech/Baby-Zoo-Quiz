const questions = [
  {
    image: "baby-elephant.jpg",
    question: "What is a baby elephant called?",
    options: ["Foal", "Calf", "Cub", "Chick"],
    answer: "Calf",
  },
  {
    image: "baby-kangaroo.jpg",
    question: "What is a baby kangaroo called?",
    options: ["Pup", "Joey", "Cub", "Fawn"],
    answer: "Joey",
  },
  {
    image: "baby-elephant.jpg",
    question: "What is a baby elephant called?",
    options: ["Foal", "Calf", "Cub", "Chick"],
    answer: "Calf",
  },
  // Add more...
];


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
let totalTimeLeftime = 600; // 10 minutes in seconds
let totalTime = 0;
let totalTimer;


// Function to display the current question
function loadQuestion(index) {
  clearInterval(timer);
  timeLeftEl.textContent = totalTimeLeftime;
  startQuestionTimer();

  const q = questions[index];
  imageEl.src = q.image;
  questionText.textContent = q.question;

  options.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.onclick = () => handleAnswer(btn.textContent === q.answer);
  });

  updateProgress();
}

function startQuestionTimer() {
  timer = setInterval(() => {
    totalTimeLeftime--;
    timeLeftEl.textContent = totalTimeLeftime;
    if (totalTimeLeftime <= 0) {
      clearInterval(timer);
      submitQuestions();
    }
  }, 1000);
}


function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    scoreDisplay.textContent = score;
  }
  clearInterval(timer);
  setTimeout(() => nextQuestion(), 500); // Delay before auto-next
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


// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});


// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  } 
  // else {
  //       localStorage.setItem("babyZooScore", score);
  //       localStorage.setItem("totalTime", totalTime);
  //     }
});





function submitQuestions() {
  clearInterval(totalTimer);
  localStorage.setItem("babyZooScore", score);
  localStorage.setItem("totalTime", totalTime);
  window.location.href = "./results.html";
}
submitButton.onclick = submitQuestions

window.onload = () => {
  scoreDisplay.textContent = score;
  loadQuestion(currentQuestion);
  startTotalTimer();
};
