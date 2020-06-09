const container = document.querySelector('.container');
const text = document.querySelector('.text');
const counter = document.querySelector('.counter');

let count = 0;
let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;
breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';
    // Wait to do this function
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breathe Out...';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
    setTimeout(() => {
        count++;
        counter.innerText = 'Breathes: ' + count;

    }, totalTime);
}

setInterval(breatheAnimation, totalTime);