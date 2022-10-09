const container = document.getElementById("container");

//Function to create Etch-A-Sketch grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    })
  }
}

//Page load up with basic 16x16 grid.
makeRows(16, 16);

//btn to change grid size and clear divs on creation of new grid.
const gridbtn = document.querySelector("#grid-question");
gridbtn.addEventListener("click", () => {
    let test = parseInt(prompt("Please enter a number 1-100."));
    if (test < 101 && test > 0) {
      container.innerHTML = "";
      let rows = test;
      let cols = test;
      makeRows (rows, cols);
    } else {
      alert("The given input was invalid. Please enter a number 1-100.")
    }
});
