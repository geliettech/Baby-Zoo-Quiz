// // Placeholder logic for quiz interaction

// const questionText = document.getElementById("question");
// const scoreDisplay = document.getElementById("score");
// const options = document.querySelectorAll(".option-btn");

// let score = 0;
// let currentQuestion = 0;

// const questions = [
//   {
//     image: "baby-kangaroo.jpg",
//     question: "What is a baby kangaroo called?",
//     options: ["Pup", "Joey", "Cub", "Fawn"],
//     answer: "Joey",
//   },
//   {
//     image: "baby-elephant.jpg",
//     question: "What is a baby elephant called?",
//     options: ["Foal", "Calf", "Cub", "Chick"],
//     answer: "Calf",
//   },
//   // Add more questions as needed
// ];

// function loadQuestion(index) {
//   const q = questions[index];
//   document.getElementById("animal-image").src = q.image;
//   questionText.textContent = q.question;
//   options.forEach((btn, i) => {
//     btn.textContent = q.options[i];
//     btn.onclick = () => {
//       if (btn.textContent === q.answer) {
//         score++;
//         scoreDisplay.textContent = score;
//       }
//       // Automatically load next question (or you can require clicking "Next")
//     };
//   });
// }

// document.getElementById("nextBtn").onclick = () => {
//   if (currentQuestion < questions.length - 1) {
//     currentQuestion++;
//     loadQuestion(currentQuestion);
//   } else {
//     alert("Quiz complete!");
//     window.location.href = "results.html"; // Results page
//   }
// };

// document.getElementById("prevBtn").onclick = () => {
//   if (currentQuestion > 0) {
//     currentQuestion--;
//     loadQuestion(currentQuestion);
//   }
// };

// document.getElementById("submitBtn").onclick = () => {
//   alert(`Your final score is ${score}`);
//   window.location.href = "./results.html";
// };

// window.onload = () => {
//   loadQuestion(currentQuestion);
// };


const questionText = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const options = document.querySelectorAll(".option-btn");
const imageEl = document.getElementById("animal-image");
const timeLeftEl = document.getElementById("time-left");
const progressFill = document.getElementById("progress");

let score = 0;
let currentQuestion = 0;
let timer;
let timePerQuestion = 10; // seconds
let totalTime = 0;
let totalTimer;

const questions = [
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

function loadQuestion(index) {
  clearInterval(timer);
  timeLeftEl.textContent = timePerQuestion;
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

function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    scoreDisplay.textContent = score;
  }
  clearInterval(timer);
  setTimeout(() => nextQuestion(), 500); // Delay before auto-next
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  } else {
    clearInterval(totalTimer);
    localStorage.setItem("babyZooScore", score);
    localStorage.setItem("totalTime", totalTime);
    window.location.href = "results.html";
  }
}

function startQuestionTimer() {
  let time = timePerQuestion;
  timer = setInterval(() => {
    time--;
    timeLeftEl.textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";
}

function startTotalTimer() {
  totalTimer = setInterval(() => {
    totalTime++;
  }, 1000);
}

document.getElementById("nextBtn").onclick = nextQuestion;
document.getElementById("prevBtn").onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
};

document.getElementById("submitBtn").onclick = () => {
  clearInterval(totalTimer);
  localStorage.setItem("babyZooScore", score);
  localStorage.setItem("totalTime", totalTime);
  window.location.href = "results.html";
};

window.onload = () => {
  scoreDisplay.textContent = score;
  loadQuestion(currentQuestion);
  startTotalTimer();
};
