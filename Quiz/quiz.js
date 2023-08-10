const questions = [
  // Objective questions
  {
    type: "objective",
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    answer: 0,
  },
  {
    type: "objective",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    type: "objective",
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: 0,
  },
  {
    type: "objective",
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: 0,
  },

  // Subjective questions
  {
    type: "subjective",
    question: "Explain the concept of gravity.",
    answer: "Gravity is the force that attracts two masses toward each other.",
  },
  {
    type: "subjective",
    question: "Describe the process of cellular respiration.",
    answer:
      "Cellular respiration is the process by which cells convert glucose and oxygen into energy, carbon dioxide, and water.",
  },
  {
    type: "subjective",
    question: "Discuss the significance of the Industrial Revolution.",
    answer:
      "The Industrial Revolution marked a major shift in manufacturing and transportation, leading to significant social and economic changes.",
  },
  {
    type: "subjective",
    question:
      "Explain the theory of natural selection proposed by Charles Darwin.",
    answer:
      "Natural selection is the process through which species evolve by individuals with advantageous traits being more likely to survive and reproduce.",
  },
  {
    type: "subjective",
    question: "What are the key principles of democracy?",
    answer:
      "Key principles of democracy include equality, freedom of speech, representation, and the rule of law.",
  },
];
let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes in seconds

const timer = document.getElementById("timer");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

function showQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `
	  <h2>Question ${currentQuestion + 1}/${questions.length}</h2>
	  <p>${question.question}</p>
	  ${
      question.type === "objective"
        ? question.options
            .map(
              (option, index) => `
			<label>
			  <input type="radio" name="option" value="${index}">
			  ${option}
			</label><br>
		  `
            )
            .join("")
        : '<textarea id="subjective-answer" rows="4" cols="50" placeholder="Your answer..."></textarea>'
    }
	`;
}

function updateTimer() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	timer.textContent = `Time Remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function startTimer() {
	const timerInterval = setInterval(() => {
	  if (timeLeft > 0) {
		timeLeft--;
		updateTimer();
	  } else {
		clearInterval(timerInterval);
		showScore();
	  }
	}, 1000);
  }

function checkAnswer() {
	const question = questions[currentQuestion];
	if (question.type === 'objective') {
	  const selectedOption = document.querySelector('input[name="option"]:checked');
	  if (!selectedOption) return;
	  const selectedAnswer = parseInt(selectedOption.value);
	  if (selectedAnswer === question.answer) {
		score++;
	  }
	  selectedOption.checked = false;
	} else {
	  const subjectiveAnswer = document.getElementById('subjective-answer').value.trim().toLowerCase();
	  if (subjectiveAnswer === question.answer.toLowerCase()) {
		score++;
	  }
	}
	currentQuestion++;
  
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.style.display = "none";
  nextButton.style.display = "none";
  scoreContainer.textContent = `Your Total Score: ${score}/${questions.length}`;
  scoreContainer.style.display = "block";
}
nextButton.addEventListener("click", checkAnswer);

startTimer();
showQuestion();