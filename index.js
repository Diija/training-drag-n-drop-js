let gridConf = {
    gridDom : document.getElementById(''),
    nRows : 5,
    nCols : 5,
    grid : [],
    filledCell : {x: 1, y: 1}
};

function populateGrid() {
    for(let i = 0; i < gridConf.nRows; i++) {
        let newRow = [];
        for(let j = 0; j < gridConf.nCols; j++) {
            newRow.push(false);
        }
        gridConf.grid.push(newRow);
    }
};

function createHtmlFromGrid() {
    for(let i = 0; i < gridConf.nRows; i++) {
        for(let j = 0; j < gridConf.nCols; j++) {
            let newGridCell = document.createElement('span');
            newGridCell.classList.add('grid-cell');
            
            if(j == gridConf.filledCell.x && i == gridConf.filledCell.y) {
                newGridCell.classList.add('grid-with-block');

                let newFilledCell = document.createElement('div');
                newFilledCell.classList.add('block');
                newFilledCell.innerHTML = "BLOCK";
                newGridCell.appendChild(newFilledCell);
            }
            gridConf.gridDom.appendChild(newGridCell);
        }
    }
};

window.onload = () => {
    gridConf.gridDom = document.getElementById('grid-container');
    gridConf.gridDom.style.gridTemplateColumns = `repeat(${gridConf.nCols}, 1fr)`;
    gridConf.gridDom.style.gridTemplateRows = `repeat(${gridConf.nRows}, 1fr)`;
    populateGrid();
    createHtmlFromGrid();
};