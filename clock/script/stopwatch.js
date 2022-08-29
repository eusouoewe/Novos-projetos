var time = document.querySelector('clock');

let mili = 00;
let sec = 00;
let min = 00;
let INTERVAL;

function miliseconds() {
        mili++
        if (mili < 10) {
                mili= '0' + mili;
        } 
        if (mili > 99) {
                mili = 0;
                seconds();
        }
}

function seconds() {
        sec++
        if (sec < 10) {
                sec = '0' + sec;
        } 
        if (sec == 59) {
                sec = 0;
                minutes();
        }
}

function minutes() {
        min++
        if (min < 10) {
                min = '0' + min;
        }
}

function start() {
        clearInterval(INTERVAL);
        INTERVAL = setInterval(() => {
                miliseconds()
        }, 100)
        var time = min + ':' + sec + ':' + mili;
        clock.innerHTML = time;
        document.getElementById('clock').style.fontSize = '40px';
}

function pause() {
        clearInterval(INTERVAL);
}

function reset() {
        clearInterval(INTERVAL);
        mili = 0;
        sec = 0;
        min = 0;
        clock.innerHTML = `00:00:00`
}
