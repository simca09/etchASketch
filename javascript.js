document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    let btn_popup = document.querySelector(".gridSize");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
    console.log("hi")
});


console.log("hey")


function createBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let repDiv = document.createElement("div");
        repDiv.style.background = "yellow";
        board.insertAdjacentElement("beforeend", repDiv);
    } 
};

function getSize() { 
    let input = prompt("What will the size of the board be?")
    let message = document.querySelector(".message")
    if (input == ""){
        message.innerHTML = "Please provide a number"
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
    } else {
        message.innerHTML = "Now you can play!"
        return input;
    }
}


