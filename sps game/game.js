const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const choicebtn = document.querySelectorAll(".btn");
let playertxt;
let comptxt;
let resulttxt;

choicebtn.forEach(button => button.addEventListener("click", () => {
    playertxt = button.textContent;
    computertext();
    player.textContent = `Player: ${playertxt}`;
    computer.textContent = `Computer: ${comptxt}`;
    result.textContent = showresult();

}));

function computertext() {
    let num = (Math.floor(Math.random() * 3)) + 1;
    switch (num) {
        case 1:
            comptxt = "Rock";
            break;
        case 2:
            comptxt = "Paper";
            break;
        case 3:
            comptxt = "Scissor";
            break;
    }
}
function showresult() {
    if (comptxt == playertxt) {
        return `It's a tie`;
    }
    else if (comptxt == "Rock") {
        return (playertxt == "Paper") ? "You win!" : "You lose!!";
    }
    else if (comptxt == "Paper") {
        return (playertxt == "Scissor") ? "You win!" : "You lose!!";
    }
    else if (comptxt == "Scissor") {
        return (playertxt == "Rock") ? "You win!" : "You lose!!";
    }
}