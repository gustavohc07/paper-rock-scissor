// Random computer play

function computerPlay() {
    let choice = ["Paper", "Rock", "Scissor"]
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// Comparison of results

function playRound(playerSelection, computerSelection) {
    console.log("You: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(" ")
    if (playerSelection == computerSelection) {
        console.log("Draw! I can't believe!");
        console.log("Let's try again!");
        console.log("------------------------")
        btnElement.onclick();
    } else if ( playerSelection == "Rock" && computerSelection == "Paper" || 
                playerSelection == "Paper" && computerSelection == "Scissor" ||
                playerSelection == "Scissor" && computerSelection == "Rock") {
        let lose;
        console.log("You lose!");
        console.log("I told you cannot win!");
        console.log("------------------------")
    } else {
        let win;
        console.log("You win!")
        console.log("What? No! It can't be...")
        console.log("------------------------")
    }
}

// 5 rounds game

function game() {
    playRound(playerChoice, computerPlay());
    for (i = win = 0 || i = loss = 0; win < 5 || loss < 0 ; i++) {
        console.log("Round " + i);
        btnElement.onclick();
    }
}

game();


// Start round with button.

let btnElement = document.querySelector('button');
btnElement.onclick = function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Scissor or Paper!", "You can't beat me.");
    if (playerChoice === "" || playerChoice === null) {
        alert("Yes! Run away coward!")
        return;
    }
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock") {
        playerChoice = "Rock";
    } else if (playerChoice == "paper") {
        playerChoice = "Paper";
    } else if (playerChoice == "scissor") {
        playerChoice = "Scissor";
    } else {
        alert("This is not a valid weapon!");
        return;
    };
    playRound(playerChoice, computerPlay());
}

