const container = document.getElementById("container");

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

//makeRows(100, 100);

// const gridbtn = document.querySelector("#grid-question");
// gridbtn.addEventListener("click", () => {
//     let answer = prompt("Please input the desired number of rows and columns. 100 is the highest accepted value.");
//     console.log(answer);
// });

//console.log(answer);