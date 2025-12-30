const container = document.querySelector('#container');
const newGridBtn = document.createElement('button')
const section = document.querySelector('.bodyClass')
newGridBtn.textContent = 'New grid';
section.appendChild(newGridBtn)


function createGrid(n) {
    const totalBlocks = n*n
    let r = 0
    let b = 0
    let g = 0

    // loop for creating grid blocks and adding painting
    for (let i = 0; i<totalBlocks; i++) {
        const block = document.createElement('div');
        block.dataset.darkness = 0
        block.style.width = `${960 / n}px`
        block.style.height = `${960 / n}px`
        container.appendChild(block)
        // making rgb logic
        block.addEventListener('mouseover', () => {
        dark = Number(block.dataset.darkness);
        dark++
        block.dataset.darkness = dark
        block.style.opacity = dark * 0.1
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
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
