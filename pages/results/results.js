// Retrieve the user's score from localStorage, defaulting to 0 if not found
const score = localStorage.getItem("babyZooScore") || 0;

// Get DOM elements to display score and message
const finalScore = document.getElementById("final-score");
const message = document.getElementById("message");

// Display the final score in the results section
finalScore.textContent = `${score}`;

// Display an encouraging message based on the user's score
let msg = "";
if (score >= 8) {
  msg = "🌟 Zoo Genius! You really know your baby animals!";
} else if (score >= 4) {
  msg = "👍 Good job! You’re on your way!";
} else {
  msg = "🦁 Keep practicing! You'll be a zoo star in no time!";
}
message.textContent = msg;

// Function to reset the quiz and navigate back to the home page
function playAgain() {
  localStorage.setItem("babyZooScore", 0); // Reset score
  window.location.href = "../../index.html"; // Redirect to home
}

// Function to share score using the Web Share API (if supported)
function shareScore() {
  const shareText = `I scored ${score} on Baby Zoo Quiz! 🐾 Try it yourself!`;

  if (navigator.share) {
    // Use native share functionality on supported devices
    navigator
      .share({
        title: "Baby Zoo Quiz",
        text: shareText,
        url: window.location.origin,
      })
      .then(() => console.log("Shared successfully"))
      .catch(err => console.error("Share failed:", err));
  } else {
    // Fallback for unsupported browsers
    alert("Copy and share manually:\n\n" + shareText);
  }
}

// Retrieve and display the total time spent on the quiz
const totalTime = localStorage.getItem("totalTime") || 0;
document.getElementById("total-time").textContent = totalTime;
