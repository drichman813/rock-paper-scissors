console.log("Hello World");

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

function playRound(playerSelection, computerSelection) {
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

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?");
        computerSelection = computerPlay();
        results = playRound(playerSelection, computerSelection);
        console.log(results);
    }
}