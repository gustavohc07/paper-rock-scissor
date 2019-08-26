let round = 1;
let numberWin = 0;
let numberLose = 0;

function roundUp() {
    round += 1;
    return round;
}

// -------------------------------------------------------------------

const main = document.querySelector('.main');
const form = document.querySelector('.enterinfo__form');

const para = document.createElement('p');

const gameContainer = document.createElement('div')
gameContainer.classList.add("game");


//Get the name of the player -----------------------------------------------

function getName(e) {
    const playerName = document.querySelector('.playername');
    main.appendChild(gameContainer);
    e.preventDefault();

    if (form.fname.value == "") {
        para.textContent = `To afraid to share your name?!`;
    } else {
        para.textContent = `How dare you to challenge me, ${form.fname.value}?!`;
    }

    para.classList.add("playername__intimidation");
    playerName.appendChild(para);
    form.reset();
};

//Game divs -------------------------------------------------------------------

const gameHeader = document.createElement('div');
gameHeader.classList.add("game__header");

const gameOptions = document.createElement('div');
gameOptions.classList.add("game__options");

const gameResult = document.createElement('div');
gameResult.classList.add("game__result");

const gameTempResult = document.createElement('div')
gameTempResult.classList.add('game__temp-result')

function toggleGameDivs() {
    gameContainer.appendChild(gameHeader);
    gameContainer.appendChild(gameTempResult)
    gameContainer.appendChild(gameOptions);
    gameContainer.appendChild(gameResult);
}

//Game header ---------------------------------------------------------------------

const user = document.createElement('div');
user.classList.add('header__user');


const computer = document.createElement('para');
computer.classList.add('header__computer');


const userTempResult = document.createElement('div');
userTempResult.classList.add('user__result');

const computerTempResult = document.createElement('div');
computerTempResult.classList.add('computer__result');

function toggleGameHeader() {
    gameHeader.appendChild(user);
    gameHeader.appendChild(computer);

    gameTempResult.appendChild(userTempResult)
    gameTempResult.appendChild(computerTempResult)
}

function setHeader() {
    user.textContent = `${form.fname.value}`;
    if (user.textContent == "") {
        user.textContent = `Little Chicken`;
        rounds.textContent = "VS";
        computer.textContent = `Naughty Computer`;
        return;
    } else {
        rounds.textContent = "VS";
        computer.textContent = `Naughty Computer`;
        return;
    }

}

//UI --------------------------------------------------------------------

const playerDiv = document.createElement('div');
playerDiv.classList.add("options__player");
playerDiv.classList.add("options__player--color");

const computerDiv = document.createElement('div');
computerDiv.classList.add("options__computer");
computerDiv.classList.add("options__computer--color");

const paper = document.createElement('IMG');
paper.src = "assets/paper.png"
paper.alt = "Paper";

const paperComputer = paper.cloneNode(true);
paper.classList.add("paper");
paperComputer.classList.add("paper-computer")

const rock = document.createElement('IMG');
rock.src = "assets/stone.png";
rock.alt = "Rock";

const rockComputer = rock.cloneNode(true);
rock.classList.add("rock");
rockComputer.classList.add("rock-computer");

const scissor = document.createElement('IMG');
scissor.src = "assets/scissors.png";
scissor.alt = "Scissor";

const scissorComputer = scissor.cloneNode(true);
scissor.classList.add("scissor");
scissorComputer.classList.add("scissor-computer");

const rounds = document.createElement('div');
rounds.classList.add('options__rounds');


function toggleGameUI() {
    gameOptions.appendChild(playerDiv);
    gameOptions.appendChild(rounds);
    gameOptions.appendChild(computerDiv);

    playerDiv.appendChild(paper);
    playerDiv.appendChild(rock);
    playerDiv.appendChild(scissor);

    computerDiv.appendChild(paperComputer);
    computerDiv.appendChild(rockComputer);
    computerDiv.appendChild(scissorComputer);
}

//Result ---------------------------------------------------------------------

const result = document.createElement('p');
result.classList.add('result__para')
const paraResult = document.createElement('p');
paraResult.classList.add('result__para')
const computerText = document.createElement('p');
computerText.classList.add('result__para')


function computerPlay() {
    const choice = [paperComputer, rockComputer, scissorComputer];
    const randomChoice = Math.floor(Math.random() * choice.length);
    choice[randomChoice].classList.toggle('computer__choice');

    const compChoice = document.getElementsByClassName('computer__choice')
    const choiceArray = Array.from(compChoice);
    if (choiceArray.length == 0) {
        choice[randomChoice].classList.toggle('computer__choice');
    } else if (choiceArray.length > 1) {
        rockComputer.classList.remove('computer__choice');
        paperComputer.classList.remove('computer__choice');
        scissorComputer.classList.remove('computer__choice');
        choice[randomChoice].classList.toggle('computer__choice');
    }
    return choice[randomChoice];
}


function toggleGameResult(e, computerChoice) {
    gameResult.appendChild(result);
    gameResult.appendChild(paraResult);
    gameResult.appendChild(computerText);

    result.textContent = `Round ${round}`;

    if (e.target.classList.contains('paper') && computerChoice == paperComputer ||
        e.target.classList.contains('rock') && computerChoice == rockComputer ||
        e.target.classList.contains('scissor') && computerChoice == scissorComputer) {
        paraResult.textContent = `Draw`;
        computerText.textContent = 'See? I can read your mind.'
    } else if (e.target.classList.contains('paper') && computerChoice == rockComputer ||
        e.target.classList.contains('rock') && computerChoice == scissorComputer ||
        e.target.classList.contains('scissor') && computerChoice == paperComputer) {
        paraResult.textContent = `You win!`;
        computerText.textContent = `What?! It can't be...`;
        numberWin += 1;
        userTempResult.textContent = numberWin;
    } else {
        paraResult.textContent = `You lost!`;
        computerText.textContent = `You can never defeat me!`;
        numberLose += 1;
        computer.innerHTML = `Naughty Computer`
        computerTempResult.textContent = numberLose;
    }
    roundUp();
}

//Reset button ----------------------------------------------------------------

const resetBtn = document.querySelector('.form__reset')
resetBtn.addEventListener('click', () => {
    numberWin = 0;
    numberLose = 0;
    round = 1;

    document.querySelector('.form__submit').disabled = false;
    document.querySelector('.game__result').innerHTML = "";
    document.querySelector('.user__result').innerHTML = "";
    document.querySelector('.computer__result').innerHTML = "";

    document.querySelector('.paper').classList.remove('player__choice');
    document.querySelector('.rock').classList.remove('player__choice');
    document.querySelector('.scissor').classList.remove('player__choice');

    document.querySelector('.paper-computer').classList.remove('computer__choice');
    document.querySelector('.rock-computer').classList.remove('computer__choice');
    document.querySelector('.scissor-computer').classList.remove('computer__choice');
    
    document.querySelector('.game').remove();
    document.querySelector('.playername__intimidation').remove();
})


// Start game and load UI functions -----------------------------------------------

function startGame() {
    toggleGameDivs();
    toggleGameHeader();
    setHeader();
    toggleGameUI();
    document.querySelector(".form__submit").disabled = true;
}

playerDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains('paper') || e.target.classList.contains('rock') ||
        e.target.classList.contains('scissor')) {
        e.target.classList.toggle('player__choice');
        const playerChoice = document.getElementsByClassName("player__choice");
        const choiceArray = Array.from(playerChoice);
        if (choiceArray.length == 0) {
            e.target.classList.toggle('player__choice');
        } else if (choiceArray.length > 1) {
            rock.classList.remove('player__choice');
            paper.classList.remove('player__choice');
            scissor.classList.remove('player__choice');
            e.target.classList.toggle('player__choice');
        }
        toggleGameResult(e, computerPlay());
    }
});


form.addEventListener("submit", startGame)
form.addEventListener("submit", getName)