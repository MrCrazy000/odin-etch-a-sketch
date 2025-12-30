const container = document.querySelector('#container');
const newGridBtn = document.createElement('button')
const section = document.querySelector('#section')
newGridBtn.textContent = 'New grid';
section.appendChild(newGridBtn)


function createGrid(n) {
    const totalBlocks = n*n

    // loop for creating grid blocks and adding painting
    for (let i = 0; i<totalBlocks; i++) {
        const block = document.createElement('div');
        block.style.width = `${960 / n}px`
        block.style.height = `${960 / n}px`
        container.appendChild(block)
        block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'black'
        })
    }
        
}

function createNewGrid() {
    let newGridSize = 0
    newGridSize = Number(prompt('Enter your new grid size'));
    if (isNaN(newGridSize) == true) {
        alert('Please enter a valid number')
    } else if (newGridSize > 100) {
        alert("You can't create grids with size more than a 100.")
    } else if (newGridSize <= 1) {
        alert('Please enter a number that is greater than 0.')
    } else {
        container.innerHTML = ''
        createGrid(newGridSize)
    }
}

newGridBtn.addEventListener('click', () => createNewGrid())
createGrid(16)
