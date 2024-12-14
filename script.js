let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScoreP = document.querySelector("#user")
const compScoreP = document.querySelector("#comp")
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}
// show winner 
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScoreP.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#52AE44";
        msg.style.color = "#F0F7F7";
        
    }else {
        compScore++
        compScoreP.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#D12525";
        msg.style.color = "#F0F7F7";
    }
}
// draw match
const drawGame = () => {
    msg.innerText = "Oops, its a draw!"
    msg.style.backgroundColor = "#151825";
    msg.style.color = "#F0F7F7";
}
const playGame = (userChoice) => {
    // generated Computer choice
    const compChoice = genCompChoice();
    // console.log(`computer ${compChoice}`)
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});