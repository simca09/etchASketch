// const board = document.getElementById("board");


document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    console.log("hi")
});
console.log("hey")

function createBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};