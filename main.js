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
    } else if ( playerSelection == "Rock" && computerSelection == "Paper" || 
                playerSelection == "Paper" && computerSelection == "Scissor" ||
                playerSelection == "Scissor" && computerSelection == "Rock") {
        console.log("You lose!");
        console.log("I told you cannot win!");
        console.log("------------------------");
        numberLose += 1;
    } else if ( playerSelection == "Rock" && computerSelection == "Scissor" || 
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissor" && computerSelection == "Paper") {
        console.log("You win!");
        console.log("What? No! It can't be...");
        console.log("------------------------");
        numberWin += 1;
    } else {
        console.log("Hahahahaha you don't even know how to play!");
        console.log("How pathetic...");
        console.log("------------------------");
    }
}


// Who gets 5 first wins.

function game(playerSelection, computerSelection) {
    if (playerSelection == !"" || playerSelection == !null) {
        // console.log("Yes! Run away coward!");
        return restart();
    } else {
        playRound(playerSelection, computerSelection);
        while (numberLose < 3 && numberWin < 3) {
            btnElement.onclick();
            return;
        }
        console.log("Player: " + numberWin + "\n" + "Computer: " + numberLose);
        (numberLose > numberWin) ? console.log("You were destroyed...") : console.log("You... win?! HOW?");
        return restart();
    }
}

// Cancel game

function restart() {
    round = 0;
    numberWin = 0;
    numberLose = 0;
    console.log("________________________")
    console.log(" ")
}

// Start round with button.

let btnElement = document.querySelector('button');

btnElement.onclick = function getPlayerChoiceAndPlay() {
    let playerChoice = prompt("Choose Rock, Scissor or Paper!", "You can't beat me.");
    if (playerChoice == "" || playerChoice == null) {
        console.log("Yes! Run away coward!");
        return restart();
    } else {
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice == "rock") {
            playerChoice = "Rock";
        } else if (playerChoice == "paper") {
            playerChoice = "Paper";
        } else if (playerChoice == "scissor") {
            playerChoice = "Scissor";
        } else {
            console.log("This is not a valid weapon!");
        };
    } 
    roundUp();
    console.log("Round: " + round);
    game(playerChoice, computerPlay());
    return;
}