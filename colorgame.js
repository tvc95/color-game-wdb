let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let title = document.querySelector("h1");
let messageDisplay = document.querySelector("#message");
title.innerHTML = `The Great <br><span id="colordisplay">${pickedColor}</span><br> Color Game`;

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    title.innerHTML = `The Great <br><span id="colordisplay">${pickedColor}</span><br> Color Game`;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;

            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                title.style.background = clickedColor;
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
})

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            title.style.background = clickedColor;
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numColors) {
    let colorArray = [];

    for (let i = 0; i < numColors; i++) {
        // get random color and push it into array
        let red = Math.floor(Math.random() * 255 + 1);
        let green = Math.floor(Math.random() * 255 + 1);
        let blue = Math.floor(Math.random() * 255 + 1);
        colorArray.push(`rgb(${red}, ${green}, ${blue})`);
    }

    return colorArray;
}