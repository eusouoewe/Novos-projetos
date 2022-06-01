const  cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
        cell.classList.add(classToAdd);
}

const handleClick = (e) => {
        // put mark (x or circle)
        const cell = e.target;
        const classToAdd = isCircleTurn ? 'circle' : 'x';

        cell.classList.add(classToAdd);
        // verify victory
        // verify draw
        //change symbol
}

for (const cell  of cellElements) {
        cell.addEventListener('click', handleClick, { once: true });
}
