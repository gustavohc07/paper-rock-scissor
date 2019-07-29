let round = 0;
let numberWin = 0;
let numberLose = 0;

function roundUp() {
    round += 1;
    return round;
}

// Random computer play

function computerPlay() {
    let choice = ["Paper", "Rock", "Scissor"]
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// Playing a Round

function playRound(playerSelection, computerSelection) {
    console.log("You: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(" ");
    if (playerSelection == computerSelection) {
        console.log("Draw! I can't believe!");
        console.log("Let's try again!");
        console.log("------------------------");
        btnElement.onclick();
    } else if ( playerSelection == "Rock" && computerSelection == "Paper" || 
                playerSelection == "Paper" && computerSelection == "Scissor" ||
                playerSelection == "Scissor" && computerSelection == "Rock") {
        console.log("You lose!");
        console.log("I told you cannot win!");
        console.log("------------------------");
        numberLose += 1;
    } else {
        console.log("You win!");
        console.log("What? No! It can't be...");
        console.log("------------------------");
        numberWin += 1;
    }
}


// Who gets 5 first wins.

function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);
    while (numberLose < 2 && numberWin < 2) {
        btnElement.onclick();
    }
}

// Cancel game

function restart() {
    round = 0;
    numberWin = 0;
    numberLose = 0;
    console.log(" ")
    console.log("________________________")
    console.log(" ")
}

// Start round with button.

let btnElement = document.querySelector('button');

btnElement.onclick = function getPlayerChoiceAndPlay() {
    let playerChoice = prompt("Choose Rock, Scissor or Paper!", "You can't beat me.");
    if (playerChoice === "" || playerChoice === null) {
        alert("Yes! Run away coward!");
        restart();
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
    roundUp();
    console.log("Round: " + round);
    game(playerChoice, computerPlay());
}

// (numberLose > numberWin) ? console.log("You were destroyed...") : console.log("You... win?! HOW?");


