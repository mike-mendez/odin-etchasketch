const grid = document.getElementById("grid-container");
const gridSquareSize = [16, 32, 64];

const renderGrid = (gridSize) => {
  const squareWidth = 100 / gridSize + "%";
  const squareHeight = 100 / gridSize + "%";

  grid.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const newDiv = document.createElement("div");
      newDiv.className = "grid-square";
      newDiv.style.width = squareWidth;
      newDiv.style.height = squareHeight;
      grid.appendChild(newDiv);
    }
  }
};

document.addEventListener("DOMContentLoaded", renderGrid(gridSquareSize[1]));

const densityButtons = document.querySelectorAll(".density-button");
const densityButtonsArray = Array.from(densityButtons);
const modeButtons = document.querySelectorAll(".mode-button");

densityButtonsArray.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.classList.contains("button-active")) {
      densityButtonsArray.forEach((btn) => btn.classList.remove("button-active"));
      element.classList.add("button-active");
      renderGrid(gridSquareSize[densityButtonsArray.indexOf(element)]);
    }
  });
});
