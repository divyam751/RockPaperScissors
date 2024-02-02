const boxs = document.querySelectorAll(".box");
const result = document.querySelector("#finalResult");
const choices = ["rock", "paper", "scissors"];
let userWin = false;
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let userWon = 0;
let compWon = 0;

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    const userChoice = box.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === compChoice) {
    result.textContent = `Game Draw! , Computer and you both selected ${
      userChoice[0].toUpperCase() + userChoice.slice(1)
    } `;
  } else if (userChoice === "rock" && compChoice === "scissors") {
    userWin = true;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    userWin = true;
  } else if (userChoice === "paper" && compChoice === "rock") {
    userWin = true;
  } else {
    userWin = true;
    console.log(
      `Computer win! You selected ${userChoice} & Computer ${compChoice}`
    );
  }

  if (userWin) {
    result.textContent = `You Won! 😃 Computer Selected "${
      compChoice[0].toUpperCase() + compChoice.slice(1)
    }"`;
    result.style.backgroundColor = "green";
    userScore.textContent = `${++userWon}`;
    userWin = false;
  } else {
    result.textContent = `Computer Won! 😈 Computer Selected "${
      compChoice[0].toUpperCase() + compChoice.slice(1)
    }"`;
    compScore.textContent = `${++compWon}`;
    result.style.backgroundColor = "red";
  }
};
