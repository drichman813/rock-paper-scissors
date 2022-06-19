let playerScore = 0;
let computerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;
let results = "";

function computerPlay() {
    let random = Math.random();
    if (random <= .33) {
        return "Rock";
    } else if (random > .34 && random <= .66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        return "You tied!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                playerSelection === "Scissors" && computerSelection === "Rock" ||
                playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! " + computerSelection + " beats " +  playerSelection + "!";
    } else {
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
}

function updateResults(results) {
    document.getElementById("last-game-results").innerHTML = results;
    if (results.includes("win")) {
        playerScore++;
    } else if (results.includes("lose")) {
        computerScore++;
    }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if (playerScore == 5) {
        if (confirm("You are the ultimate champion! Dare to try again?")) {
            reset();
        };
    } else if (computerScore == 5) {
        if (confirm("You lost to a computer, the takeover will begin soon. Dare to try again?")) {
            reset();
        };
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    results = "";
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => updateResults(playRound(button.id))));



