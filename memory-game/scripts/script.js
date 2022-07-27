const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login');

const validateInput = ({ target }) => {
        if (target.value.length > 2) {
                button.removeAttribute('disabled');
        }
        else {
                button.setAttribute('disabled', '')
        }
}

const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('player', input.value);
        window.location = 'memory-game/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);