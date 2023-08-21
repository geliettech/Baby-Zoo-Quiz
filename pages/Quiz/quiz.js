// Array containing question objects
const questions = [
  // Objective questions
  {
    type: "objective",
    question: "What is the official language of Nigeria?",
    options: ["Yoruba", "Hausa", "Igbo", "English"],
    answer: 3,
  },
  {
    type: "objective",
    question: "Which sector is the largest contributor to Nigeria's GDP?",
    options: [
      "Agriculture",
      "Oil and Gas",
      "Manufacturing",
      "Information Technology",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question:
      "Which Nigerian scientist was awarded the Nobel Prize in Medicine for groundbreaking research in 2023?",
    options: [
      "Ifeoma Njoku",
      "Emeka Nwankwo",
      "Amina Jibril",
      "Ifeoluwa Ogunlesi",
    ],
    answer: 0,
  },
  {
    type: "objective",
    question: "Who is the current President of Nigeria as of July 2023?",
    options: [
      "Goodluck Jonathan",
      "Muhammadu Buhari",
      "Atiku Abubakar",
      "Tinubu Bola",
    ],
    answer: 3,
  },
  {
    type: "objective",
    question: "Nigeria celebrates its independence day on which date?",
    options: ["January 1st", "July 4th", "October 1st", "December 25th"],
    answer: 2,
  },
  // Subjective questions
  {
    type: "subjective",
    question: "Which is the most populated country in the world?",
    answer: "China",
  },
  {
    type: "subjective",
    question: "What does the acronym ECOMOG mean?",
    answer: "Economic Community Monitoring Group",
  },
  {
    type: "subjective",
    question: "What country does Nigeria share borders with the West?",
    answer: "Republic of Benin",
  },
  {
    type: "subjective",
    question: "What is the capital city of Nigeria?",
    answer:
      "Natural selection is the process through which species evolve by individuals with advantageous traits being more likely to survive and reproduce.",
  },
  {
    type: "subjective",
    question: "What are the key principles of democracy?",
    answer: "Abuja",
  },
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
    question:
      "Which Nigerian author is known for writing the novel THINGS FALL APART?",
    options: [
      "Wole Soyinka",
      "Chinua Achebe",
      "Chimamanda Ngozi Adichie",
      "Ben Okri",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question:
      "Which Nigerian musician won the Grammy Award for Best Global Music Album in 2023?",
    options: ["Burna Boy", "Wizkid", "Davido", "Tiwa Savage"],
    answer: 0,
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
    question: "What is the name of Nigeria's national currency?",
    answer: "Naira",
  },
  {
    type: "subjective",
    question: "Who was the first Nigerian female psychiatrist?",
    answer: "Dr. Bertha Johnson",
  },
  {
    type: "subjective",
    question: "Who is the chief of justices of Nigeria as of 2023?.",
    answer: "Ibrahim Tanko Muhammad",
  },
  {
    type: "subjective",
    question: "How many ethnic groups do we have in Nigeria?",
    answer: "250 ethnic groups",
  },
  {
    type: "subjective",
    question: "Nigeria’s Inspector General of Police as of January 2023 is?",
    answer: "Adamu Mohammed",
  },
  // Objective questions
  {
    type: "objective",
    question:
      "In 2023, Nigeria hosted which major international conference focused on climate change?",
    options: [
      "COP26",
      "G20 Summit",
      "World Economic Forum",
      "United Nations General Assembly",
    ],
    answer: 0,
  },
  {
    type: "objective",
    question:
      "Which infrastructure project aims to connect Lagos to Calabar via a modern railway network?",
    options: [
      "Lagos-Ibadan Rail",
      "Abuja Light Rail",
      "Lagos-Kano Rail",
      "Coastal Rail Project",
    ],
    answer: 3,
  },
  {
    type: "objective",
    question: "In 2023, Nigeria marked the centenary of which historic event?",
    options: [
      "Amalgamation of Northern and Southern Nigeria",
      "Independence from British colonial rule",
      "First oil discovery in Oloibiri",
      "Formation of the Nigerian Army",
    ],
    answer: 0,
  },
  {
    type: "objective",
    question:
      "What is the name of the Nigerian initiative launched in 2023 to promote digital literacy and technology adoption?",
    options: [
      "TechNigeria",
      "Digital Revolution NG",
      "NaijaTech Initiative",
      "Digital Nigeria Project",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question:
      "In 2023, Nigeria experienced an economic downturn primarily due to fluctuations in which global commodity market?",
    options: ["Coffee", "Gold", "Crude oil", "Wheat"],
    answer: 2,
  },

  // Subjective questions
  {
    type: "subjective",
    question:
      "Which Nigerian state is known as the CENTRE OF EXELLENCE and is a major economic hub?",
    answer: "Lagos",
  },
  {
    type: "subjective",
    question:
      "Who is the first Nigerian astronaut to participate in a space mission in 2023?",
    answer: "Wale Adeyemo",
  },
  {
    type: "subjective",
    question:
      "Which Nigerian actress won the BEST ACTRESS AWARD at the 2023 Africa Movie Academy Awards (AMAA)?",
    answer: "Genevieve Nnaji",
  },
  {
    type: "subjective",
    question:
      "Which renewable energy source is Nigeria actively promoting to reduce dependence on fossil fuels?",
    answer: "Solar power",
  },
  {
    type: "subjective",
    question: "Who was the world’s first writer of the English Dictionary?",
    answer: "Samuel Johnson",
  },
  // Objective questions
  {
    type: "objective",
    question: "What is the significance of the EKO ATLANTIC project in Lagos?",
    options: [
      "Largest shopping mall in Africa",
      "Advanced medical research facility",
      "New financial district",
      "Space exploration center",
    ],
    answer: 2,
  },
  {
    type: "objective",
    question:
      "Which Nigerian NGO is renowned for its work in promoting girls' education and gender equality?",
    options: [
      "Save Our Girls Foundation",
      "Girl Power Initiative",
      "Women Empowerment Nigeria",
      "Educate the Girl Child",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question: "Which is the second-largest continent in the world?",
    options: ["Africa", "Asia", "China", "Europue"],
    answer: 0,
  },
  {
    type: "objective",
    question: "The hottest region in the world is called?",
    options: [
      "Vincent van Gogh",
      "The Sahara Desert",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: 1,
  },
  {
    type: "objective",
    question: "Who is the current chairman of ECOWAS?",
    options: [
      "Enoch Adeboye",
      "Muhama don Issoufou",
      "Victor Osimhen",
      "Abdulrahman Idris",
    ],
    answer: 1,
  },

  // Subjective questions
  {
    type: "subjective",
    question:
      "Who is Nigeria’s current speaker of the House of Representatives?",
    answer: "Tajudeen Abbas",
  },
  {
    type: "subjective",
    question: "Who is Nigeria’s Minister of Power?",
    answer: "Abubakar Aliyu",
  },
  {
    type: "subjective",
    question: "Who was the first President of Nigeria?",
    answer: " Dr. Nnamdi Azikiwe",
  },
  {
    type: "subjective",
    question: "What Blue in the Nigerian Police flag represents?",
    answer: "Love, loyalty, and unity",
  },
  {
    type: "subjective",
    question: "What are the key principles of democracy?",
    answer:
      "Key principles of democracy include equality, freedom of speech, representation, and the rule of law.",
  },
  // Objective questions
  {
    type: "objective",
    question: "The first awarded Archbishop in Africa?",
    options: [
      "Benson Andrew Idahosa",
      "Joseph Idahosa",
      "Idahosa Joseph",
      "Madrid Andrew Idahosa",
    ],
    answer: 0,
  },
  {
    type: "objective",
    question: "The separation of powers simply means.",
    options: [
      "Checks and Balances",
      "Separate and Balances",
      "Balances and Balances",
      "Checks and Separate",
    ],
    answer: 0,
  },
  {
    type: "objective",
    question: "What does the acronym ICAO stand for?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: 0,
  },
  {
    type: "objective",
    question: "Who painted the Mona Lisa?",
    options: [
      "International Civic Aviation Organisation",
      "International Civil Avail Organisation",
      "Inter Civil Aviation Organisation",
      " International Civil Aviation Organisation",
    ],
    answer: 3,
  },
  {
    type: "objective",
    question: "Which is the highest mountain in Africa?",
    options: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount milia",
      "Mount zion",
    ],
    answer: 0,
  },
  // Subjective questions
  {
    type: "subjective",
    question: "The first woman to become a governor in Nigeria is?",
    answer: "Mrs. Virginia Etiaba",
  },
  {
    type: "subjective",
    question: " When did Nigeria break diplomatic relations with Israel?",
    answer: "1972",
  },
  {
    type: "subjective",
    question:
      "Which state has the highest percentage of contribution to oil revenue in Nigeria?",
    answer: "Delta State",
  },
  {
    type: "subjective",
    question: "Who was Nigeria’s First Military Head of State?",
    answer: "General Yakubu Gowon",
  },
  {
    type: "subjective",
    question: "What is the motto of Nigeria?",
    answer: "Unity and Faith, Peace and Progress",
  },
];
// Initialize variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds

// Get elements from the HTML
const timer = document.getElementById("timer");
const questionContainer = document.getElementById("question-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

// Function to display the current question
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
  // Enable/disable navigation buttons based on question index
  prevButton.disabled = currentQuestion === 0;
  nextButton.disabled = currentQuestion === questions.length - 1;
}

// Function to update the timer display
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `Time Remaining: ${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

// Function to start the timer countdown
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

// Function to check the user's answer
function checkAnswer() {
  const question = questions[currentQuestion];
  if (question.type === "objective") {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );
    if (!selectedOption) return;
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === question.answer) {
      score++;
    }
    selectedOption.checked = false;
  } else {
    const subjectiveAnswer = document
      .getElementById("subjective-answer")
      .value.trim()
      .toLowerCase();
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

// Function to display the final score
function showScore() {
  questionContainer.style.display = "none";
  nextButton.style.display = "none";
  scoreContainer.textContent = `Your Total Score: ${score}/${questions.length}`;
  scoreContainer.style.display = "block";
}

// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
  currentQuestion--;
  showQuestion();
});

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
});

// Start the timer and display the first question
startTimer();
showQuestion();
