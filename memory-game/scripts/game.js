const grid = document.querySelector('.grid');

const characters = [
        'beth',
        'jerry',
        'jessica',
        'morty',
        'pessoa-passaro',
        'meeseeks',
        'pickle-rick',
        'rick',
        'scroopy',
        'summer',
];

const createElement = (tag, className) => {

        const element = document.createElement(tag);
        element.className = className;
        return element;
}

const createCard = (character) => {

        const card = createElement('div', 'card');
        const front = createElement('div', 'front');
        const back = createElement('div', 'back');

        front.style.backgroundImage = `url('./images/${character}.png')`

        card.appendChild(front);
        card.appendChild(back);

        return card;
}

const loadGame = () => {

        const duplicateCharacters = [... characters, ... characters];

        const shuffledArray = duplicateCharacters.sort();

        duplicateCharacters.forEach((character) => {

                const card = createCard(character);
                grid.appendChild(card);

        });
}

loadGame();