    // Assume score was stored in localStorage
    const score = localStorage.getItem("babyZooScore") || 0;
    const finalScore = document.getElementById("final-score");
    const message = document.getElementById("message");

    finalScore.textContent = `${score}`;

    // Encouraging message based on score
    let msg = "";
    if (score >= 8) {
      msg = "🌟 Zoo Genius! You really know your baby animals!";
    } else if (score >= 4) {
      msg = "👍 Good job! You’re on your way!";
    } else {
      msg = "🦁 Keep practicing! You'll be a zoo star in no time!";
    }
    message.textContent = msg;

    function playAgain() {
      localStorage.setItem("babyZooScore", 0);
      window.location.href = "../../index.html";
    }

    function shareScore() {
      const shareText = `I scored ${score} on Baby Zoo Quiz! 🐾 Try it yourself!`;
      if (navigator.share) {
        navigator
          .share({
            title: "Baby Zoo Quiz",
            text: shareText,
            url: window.location.origin,
          })
          .then(() => console.log("Shared successfully"))
          .catch(err => console.error("Share failed:", err));
      } else {
        alert("Copy and share manually:\n\n" + shareText);
      }
    }



    const totalTime = localStorage.getItem("totalTime") || 0;
document.getElementById("total-time").textContent = totalTime;