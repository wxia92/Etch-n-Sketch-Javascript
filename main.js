let body = document.querySelector('body');
let container = document.querySelector('#container');

let sketchColumn;
let sketchBox;
let existingColumns;
let previousUserInput;
let boxes;
let boxColor = "black";

let rowsColumns = document.getElementById('rowsColumns');
let generateGrid = document.querySelector(".generate");
generateGrid.addEventListener('click', () => {
    createColumn(rowsColumns.value);
});

let resetGrid = document.querySelector(".reset");
resetGrid.addEventListener('click', () => {
    resetGame();
});

let blackButton = document.querySelector(".blackButton");
blackButton.addEventListener("click", () => {
    boxColor = "black";
});

let rainbowButton = document.querySelector(".rainbowButton");
rainbowButton.addEventListener("click", () => {
    boxColor = "rainbow"
});

function createColumn(userInput) {
    
    if ((existingColumns != undefined) && (existingColumns.length != 0)) {
        for (l=0; l<previousUserInput; l++) {
            container.removeChild(existingColumns[l])
        }
    }
    for (i = 1; i <= userInput; i++) {
        sketchColumn = document.createElement('div')
        sketchColumn.style.display = 'flex';
        sketchColumn.style.alignItems = 'center';
        sketchColumn.style.flexDirection = 'column';
        sketchColumn.style.height = `600px`;
        sketchColumn.style.width = `${600/userInput}px`;
        sketchColumn.classList.add(`column`)
    
        for (j = 1; j<= userInput; j++) {
            sketchBox = document.createElement('div');
            sketchBox.style.border = '0.5px solid grey';
            sketchBox.style.height = `${600/userInput}px`;
            sketchBox.style.width = `${600/userInput}px`;
            sketchBox.classList.add(`box`)
            for (k = 1; k <= userInput; k++) {
                sketchColumn.appendChild(sketchBox);
            }
        }
        container.appendChild(sketchColumn);
    }
    existingColumns = document.querySelectorAll(`.column`);
    previousUserInput = userInput;

    boxes = document.querySelectorAll(".box")
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function() {
            getColor(box);
        })
    });
}

function resetGame(){
    boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.style.backgroundColor = ''
    });
}

function getColor(grid) {
    if (boxColor == "black") {
        grid.style.backgroundColor = `${boxColor}`
    }
    else if (boxColor == "rainbow") {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let n = 0; n < 6; n++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        grid.style.backgroundColor = color;
    }
}



//let customButton = document.querySelector(".customButton");
//make the user input a custom color through a color selection menu 
//and change the sketch color to match
