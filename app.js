let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
} 

const drawGame= () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText = `You lose! Comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userChoice) => {
    console.log("user  choice = ", userChoice);
    //Generate comp choice
    const compChoice = genCompChoice();
    console.log("comp  choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }

        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? flase : true;
        }
        else{
            userWin= compChoice === "rock" ? flase : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }    
};

choices.forEach((choices) => {
    console.log(choices);
    choices.addEventListener("click", () => {
        const userChoice =choices.getAttribute("id");
        console.log("Choice was  clicked", userChoice);
        playGame(userChoice);
    });
});

