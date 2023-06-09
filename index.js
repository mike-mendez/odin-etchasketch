const grid = document.getElementById("grid-container");
const gridSquareSize = [16, 32, 64];

const densityButtons = document.querySelectorAll(".density-button");
const densityButtonsArray = Array.from(densityButtons);

const modeButtons = document.querySelectorAll(".mode-button");
const modeButtonsArray = Array.from(modeButtons);

const test = modeButtonsArray
  .filter((element) => element.classList.contains("button-active"))
  .map((element) => element.innerText);
console.log(test);

const eraseButton = document.getElementById("erase");

let squaresArray = [];

const drawSquare = () => {
  squaresArray.forEach((element) => {
    element.addEventListener("mouseover", () => {
      const activeMode = modeButtonsArray
        .filter((element) => element.classList.contains("button-active"))
        .map((element) => element.innerText);
      switch (activeMode) {
        case "Modern":
          // element.classList.add("square-drawn");
          break;
        case "Psychedlic":
          break;
        default:
          element.style.backgroundColor = "#707070"
          // element.classList.add("square-drawn");
          break;
      }
    });
  });
};

const renderGrid = (gridSize) => {
  const squareWidth = 100 / gridSize + "%";
  const squareHeight = 100 / gridSize + "%";

  grid.innerHTML = "";
  squaresArray = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const newDiv = document.createElement("div");
      newDiv.className = "grid-square";
      newDiv.style.width = squareWidth;
      newDiv.style.height = squareHeight;
      grid.appendChild(newDiv);
      squaresArray.push(newDiv);
    }
  }

  drawSquare();
};

const modeChange = () => {};

document.addEventListener("DOMContentLoaded", () => {
  renderGrid(gridSquareSize[1]);
});

densityButtonsArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.classList.contains("button-active")) {
      densityButtonsArray.forEach((btn) =>
        btn.classList.remove("button-active")
      );
      element.classList.add("button-active");
      renderGrid(gridSquareSize[densityButtonsArray.indexOf(element)]);
    }
  });
});

modeButtonsArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.classList.contains("button-active")) {
      modeButtonsArray.forEach((btn) => btn.classList.remove("button-active"));
    }
    element.classList.add("button-active");
  });
});

eraseButton.addEventListener("click", () => {
  squaresArray.forEach((element) => {
    if (element.classList.contains("square-drawn")) {
      element.classList.remove("square-drawn");
    }
  });
});
