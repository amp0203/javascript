'use strict';
// let process = document.querySelector('.process');
// console.log('process', typeof process);
// console.log(process?.textContent);
// console.log(document.querySelector('.process').textContent);
// document.querySelector('.process').textContent = 'Correct Number!';

// document.querySelector('.question-mark').textContent = 13;
// document.querySelector('.current-score').textContent = 20;

// console.log(document.querySelector('.input-number').value);

// document.querySelector('.layout .input-number').value = 21;
// console.log(document.querySelector('#abc'));

/*const x = function () {
    console.log(23);
};*/
// Math.random()
// var __num__ = Math.trunc(Math.random() * 20) + 1;

function abc() {
    // displayMessage('abc');
    displayMessage2('abc');
}

function displayMessage2(message) {
    document.querySelector('.process').textContent = message;
}

// hoisting javascript
// jquery // 8-10h

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.process').textContent = message;
};
abc();

document.querySelector('.check').addEventListener('click', function () {
    console.log('clicked');
    const guess = Number(document.querySelector('.input-number').value);
    console.log(guess);
    // document.querySelector('.process').textContent = 'Correct Number!';

    //no number
    if (!guess) {
        // document.querySelector('.process').textContent = 'No number! 🤷‍♀️';
        displayMessage('No number! 🤷‍♀️');

        //correct number
    } else if (guess === secretnumber) {
        // document.querySelector('.process').textContent = '🤩 Correct Number!';
        displayMessage('🤩 Correct Number!');

        document.querySelector('.question-mark').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.question-mark').style.width = '300px';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //wrong number
    } else if (guess !== secretnumber) {
        if (score > 1) {
            document.querySelector('.process').textContent =
                guess > secretnumber ? '😒 Too high!' : '😢Too low!';
            score--;

            document.querySelector('.current-score').textContent = score;
        } else {
            document.querySelector('.process').textContent =
                '😶‍🌫️ You lost the game!';
            document.querySelector('.current-score').textContent = 0;
        }
    }

    /* else if (guess > secretnumber) {
        if (score > 1) {
            document.querySelector('.process').textContent = '😒 Too high!';
            score = score - 1;
            document.querySelector('.current-score').textContent = score;
        } else {
            document.querySelector('.process').textContent =
                '😶‍🌫️ You lost the game!';
            document.querySelector('.current-score').textContent = 0;
        }
    } else if (guess < secretnumber) {
        if (score > 1) {
            document.querySelector('.process').textContent = '😢 Too low!';
            score = score - 1;
            document.querySelector('.current-score').textContent = score;
        } else {
            document.querySelector('.process').textContent =
                '😶‍🌫️ You lost the game!';
            document.querySelector('.current-score').textContent = 0;
        }
    }*/
});

document.querySelector('.reload').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.current-score').textContent = score;
    document.querySelector('.process').textContent = 'Start guessing...';
    document.querySelector('.question-mark').textContent = '?';
    document.querySelector('.input-number').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.question-mark').style.width = '160px';
});
