const grid = document.getElementById("grid-container");
const gridSizeWidth = [22, 44, 100]
const gridSizeHeight = [16, 38, 60]

for (let i = 0; i < gridSizeHeight[1]; i++) {
  for (let j = 0; j < gridSizeWidth[1]; j++) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-square";
    grid.appendChild(newDiv);
  }
}

// grid.style.width = `${gridSizeWidth}rem`;
// grid.style.height = `${gridSizeHeight}rem`
