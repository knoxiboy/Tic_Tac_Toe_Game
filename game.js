let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#Again");
let msgContainer = document.querySelector("#result");
let msg = document.querySelector("#msg");

let turnO = true; // true for O's turn, false for X's turn
let gameOver = false; // Flag to check if the game is over

let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        console.log("box clicked");
        if (box.innerText === "" && !gameOver) {
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO; // Toggle the turn
        }
        checkWinner(); // Check for a winner after each move
    });
});

const checkWinner = () => {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            gameOver = true; // Set game over flag
            return;
        }
    }

    // Check for a draw
    if ([...boxes].every(box => box.innerText !== "")) {
        showDraw();
        gameOver = true; // Set game over flag
    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hidden"); // Show the message container
    msg.innerText = `${winner} wins!`; // Display the winner
}

const showDraw = () => {
    msgContainer.classList.remove("hidden"); // Show the message container
    msg.innerText = "It's a draw!"; // Display draw message
}

newGameBtn.addEventListener("click", () => {
    resetGame(); // Reset the game when "New Game" is clicked
});

resetBtn.addEventListener("click", () => {
    resetGame(); // Reset the game when "Reset" is clicked
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the text in each box
    });
    turnO = true; // Reset to O's turn
    gameOver = false; // Reset game over flag
    msgContainer.classList.add("hidden"); // Hide the message container
}