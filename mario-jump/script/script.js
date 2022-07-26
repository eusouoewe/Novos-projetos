const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const gameOver = document.querySelector('.gameOver')

const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {

                mario.classList.remove('jump')  

        }, 500);
}

const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace ('px', '')
        const gameOverBg = gameOver.offset;

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none'
                pipe.style.left = `${pipePosition}px`

                mario.style.animation = 'none'
                mario.style.bottom = `${marioPosition}px`
                mario.src = './imagens/game-over.png';
                mario.style.width = '75px'
                mario.style.marginLeft = '50px'

                cloud.style.animation = 'none'
                cloud.style.left = `${cloudPosition}px`

                gameOver.style.width = '100%'
                gameOver.style.height = '100%'
                gameOver.style.position = 'absolute'

                clearInterval (loop);
        }

}, 10)

document.addEventListener('keydown', jump);