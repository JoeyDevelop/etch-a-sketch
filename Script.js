const containerDiv = document.querySelector("#container")
let gridCount = 0;

function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns)
    for ( i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item")
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
        containerDiv.appendChild(cell);
    }
}
makeRows (64, 64);
