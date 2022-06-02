const  cellElements = document.querySelectorAll("[data-cell]");
const field = document.querySelectorAll("[data-field]");

let isCircleTurn;

const startGame = () => {
        for (const cell of cellElements) {
                cell.addEventListener("click", handleClick, {once: true});
        }

        isCircleTurn = false;

        field.classList.add("x");
}

const placeMark = (cell, classToAdd) => {
        cell.classList.add(classToAdd);
}

const swapTurns = () => {
        isCircleTurn = !isCircleTurn;

        field.classList.remove('circle');
        field.classList.remove('x');

        if (isCircleTurn) {
                field.classList.add('circle');
        } else {
                field.classList.add('x');
        }
}

const handleClick = (e) => {
        // put mark (x or circle)
        const cell = e.target;
        const classToAdd = isCircleTurn ? 'circle' : 'x';

        placeMark(cell, classToAdd);

        // verify victory
        // verify draw
        //change symbol

        swapTurns ();
}

startGame();