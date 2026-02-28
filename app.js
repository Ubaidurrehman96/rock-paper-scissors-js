userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor = "#DE3F4C";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#46E538"
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#CB44DA";
    }
}

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3  );
    return options[randIdx];
};

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genComputerChoice();
    if(userChoice === compChoice){
        drawGame();
    } else{
        userWin = true;
        if(userChoice === "rock"){
            // scissors, papers
            userWin = compChoice === "paper" ? false : true; 
        } else if(userChoice === "paper"){
            // scissor , rock
            userWin = compChoice === "scissor" ? false : true;
        } else{
            // rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
});