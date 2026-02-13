let userChoice = null;
let computerChoice = null;
const choices = ["Rock", "Paper", "Scissors"];

// Scores
let userScore = 0;
let computerScore = 0;

// Handle clicks on Stone / Paper / Scissors buttons
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {

        // Set user's choice from button id
        userChoice = button.id;

        // Random computer choice from array
        computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Update text showing choices
        document.getElementById("userChoice").textContent = `You: ${userChoice}`;
        document.getElementById("computerChoice").textContent = `Chitti: ${computerChoice}`;

        // Decide outcome
        determineOutcome();
    });
});

function determineOutcome() {
    const outcomeElement = document.getElementById("outcome");

    if (userChoice === computerChoice) {
        outcomeElement.textContent = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        outcomeElement.textContent = "You win!";
        userScore++; // increase user score
    } else {
        outcomeElement.textContent = "Chitti wins!";
        computerScore++; // increase computer score
    }

    // Update score boxes
    document.getElementById("userScoreBox").textContent = userScore;
    document.getElementById("computerScoreBox").textContent = computerScore;
}

// Reset game button logic
const resetButton = document.getElementById("resetBtn");

resetButton.addEventListener("click", () => {
    // Reset scores
    userScore = 0;
    computerScore = 0;

    // Update score boxes
    document.getElementById("userScoreBox").textContent = userScore;
    document.getElementById("computerScoreBox").textContent = computerScore;

    // Clear choices and message
    document.getElementById("userChoice").textContent = "You: ";
    document.getElementById("computerChoice").textContent = "Chitti: ";
    document.getElementById("outcome").textContent = "";
});
